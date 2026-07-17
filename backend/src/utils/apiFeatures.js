class API_feature{
  constructor(model,query){
    this.model=model;
    this.query=query;
  }
  async execute(populate=null,search_field=null){
    const {page=1,limit=10,sort="createdAt",search,...filters}=this.query

    let filter_string=JSON.stringify(filters);
    filter_string=filter_string.replace(/\b(gte|gt|lte|lt|in)\b/g,
      match=>`$${match}`
    );

    const mongoose_filter=JSON.parse(filter_string)

    if (search && search_field){
      mongoose_filter[search_field]={
        $regex:search,
        $options:"i"
      }
    }

    //converting the string(bool) to the exact bool type
    Object.keys(filters).forEach((key) => {
    if (filters[key]==="true")filters[key]=true;
    if (filters[key]==="false")filters[key]=false;
    });

    const skip=(Number(page)-1)*Number(limit)
    const total=await this.model.countDocuments(mongoose_filter)

    let query=this.model.find(mongoose_filter).sort(sort).skip(skip).limit(Number(limit));

    if (populate){

      if (Array.isArray(populate)){
        populate.forEach((item)=>{
          query=query.populate(item)
        })
      }else{
      query=query.populate(populate)
      }
    };

    const data=await query;

    return {
      total,
      page: Number(page),
      totalPages: Math.ceil(total / Number(limit)),
      limit: Number(limit),
      data
    }
  }
}

export default API_feature;