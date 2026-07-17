class API_feature{
  constructor(model,query){
    this.model=model;
    this.query=query;
  }
  async execute(populate=null){
    const {page=1,limit=10,sort="createdAt",...filters}=this.query

    //converting the string(bool) to the exact bool type
    Object.keys(filters).forEach((key) => {
    if (filters[key]==="true")filters[key]=true;
    if (filters[key]==="false")filters[key]=false;
    });

    const skip=(Number(page)-1)*Number(limit)
    const total=await this.model.countDocuments(filters)

    let query=this.model.find(filters).sort(sort).skip(skip).limit(Number(limit));

    if (populate){
      query=query.populate(populate)
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