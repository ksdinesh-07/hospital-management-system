1. LOGIN - post

http://localhost:5000/api/v1/auth/login

{
  "email": "dineshks001@gmail.com",
  "password": "Password@123"
}

2. GET ALL DOCTORS - GET
http://localhost:5000/api/v1/doctors

AUTHENTICATION BEARER -........

3. GET DOCTOR BY ID

http://localhost:5000/api/v1/doctors/6a567e0fb7c8cb6d38715a5e

AUTHENTICATION BEARER -........

4. PUT - UPDATE DOCTOR BY ID

http://localhost:5000/api/v1/doctors/6a567e0fb7c8cb6d38715a5e

AUTHENTICATION BEARER -........

5. DELETE -DELETE THE DOCTOR BY ID

http://localhost:5000/api/v1/doctors/6a567e0fb7c8cb6d38715a5e

AUTHENTICATION BEARER -........

6. POST-CREATE A PATIENT 

http://localhost:5000/api/v1/patients

AUTHENTICATION BEARER -........

7. GET -GET ALL PATIENT

http://localhost:5000/api/v1/patients

AUTHENTICATION BEARER -........

8. GET -GET PATIENT BY ID

http://localhost:5000/api/v1/patients/<patient_id>

AUTHENTICATION BEARER -........

9. PUT -UPDATE PATIENT RECORDS BY ID

http://localhost:5000/api/v1/patients/<patient_id>

AUTHENTICATION BEARER -........

10. DELETE - DELETE PATIENT BY ID

http://localhost:5000/api/v1/patients/<patient_id>

AUTHENTICATION BEARER -........

11. POST -BOOKING AN APPOINTMENT

http://localhost:5000/api/v1/appointments

AUTHENTICATION BEARER -........

12. GET - GET ALL APPOINTMENTS

http://localhost:5000/api/v1/appointments

AUTHENTICATION BEARER -........

13. GET - GET ALL APPOINTMENTS BY ID

http://localhost:5000/api/v1/appointments/6a58803057897c58faa89039

AUTHENTICATION BEARER -........

14. PUT  - UPDATE APPOINTMENT

http://localhost:5000/api/v1/appointments/6a58803057897c58faa89039

AUTHENTICATION BEARER -........

15. PATCH - SOFT DELETE APPOINTMENT

http://localhost:5000/api/v1/appointments/6a58803057897c58faa89039/cancel

AUTHENTICATION BEARER -........

16. GET - GET DASHBOARD STATISTIC

http://localhost:5000/api/v1/dashboard/stats

17. GET -FILTER BY SPECIALIZATION

http://localhost:5000/api/v1/doctors?specialization=Cardiology

18. GET-FILTER BY AVAILABILTITY

http://localhost:5000/api/v1/doctors?isAvailable=true

19. GET-FILTER BY SPECIALIZATION AND AVAILABILITY

http://localhost:5000/api/v1/doctors?specialization=Cardiology&isAvailable=true

20. GET -PAGINATION FIRST PAGE.....

http://localhost:5000/api/v1/doctors?page=1&limit=2

21. GET -COMBINED FILTER AND THE PAGINATION 

http://localhost:5000/api/v1/doctors?specialization=Cardiology&page=1&limit=2

22. GET -SORT  

a => BY EXPERIENCE 

(ascending)
http://localhost:5000/api/v1/doctors?sort=experience

(decending)
http://localhost:5000/api/v1/doctors?sort=-experience

b => BY CONSULTATION FEE

(ascending)
http://localhost:5000/api/v1/doctors?sort=consultationFee

(decending)
http://localhost:5000/api/v1/doctors?sort=-consultationFee

23.  GET - COMBINED FILTER,PAGINATION AND SORT

http://localhost:5000/api/v1/doctors?specialization=Cardiology&isAvailable=true&page=1&limit=5&sort=-experience

24. GET -FIRST PAGE (patient)

page 1
http://localhost:5000/api/v1/patients?page=1&limit=2

page2
http://localhost:5000/api/v1/patients?page=2&limit=2

25. GET -SORT BY CREATION DATE

(oldest first)
http://localhost:5000/api/v1/patients?sort=createdAt

(newest first)
http://localhost:5000/api/v1/patients?sort=createdAt

26. GET -FILTER BY GENDER

(male)
http://localhost:5000/api/v1/patients?gender=Male

(female)
http://localhost:5000/api/v1/patients?gender=Female

27. GET -FILTER BY BLOOD GROUP

http://localhost:5000/api/v1/patients?blood_group=O+

http://localhost:5000/api/v1/patients?blood_group=B+

28. GET -COMBINED FILTERS

http://localhost:5000/api/v1/patients?gender=Male&blood_group=B+

29. GET -COMBINE FILTER + PAGINATION

http://localhost:5000/api/v1/patients?gender=Male&page=1&limit=2

30. GET -COMBINE FILTER + SORT + PAGINATION

http://localhost:5000/api/v1/patients?gender=Male&sort=-createdAt&page=1&limit=2

31. GET -PAGINATION FOR APPOINTMENTS

http://localhost:5000/api/v1/appointments?page=1&limit=2

32. GET - SORT BY APPOINTMENT DATE

http://localhost:5000/api/v1/appointments?sort=-appointment_date

33. GET - FILTER BY STATUS

http://localhost:5000/api/v1/appointments?status=Scheduled

34. GET -FILTRE BY DOCTOR

http://localhost:5000/api/v1/appointments?doctor=YOUR_DOCTOR_ID

http://localhost:5000/api/v1/appointments?doctor=6a567e0fb7c8cb6d38715a5e

35. GET -FILTER BY PATIENT

http://localhost:5000/api/v1/appointments?patient=6a567e0fb7c8cb6d38715a5e

36. GET -COMBINE STATUS + SORT + PAGE AND LIMIT 

GET http://localhost:5000/api/v1/appointments?status=Scheduled&sort=-appointment_date&page=1&limit=5

37. GET - FEE GREATER THAN 500

http://localhost:5000/api/v1/doctors?consultationFee[gte]=500

38. GET - EXPERIENCE GREATER THAN OR EQUAL TO 8

http://localhost:5000/api/v1/doctors?experience[gte]=8

39. GET -FEE LESS THAN OR EQUAL TO 700

http://localhost:5000/api/v1/doctors?consultationFee[lte]=700

40. GET - EXPERIENCE BETWEEN 5 AND 10 

http://localhost:5000/api/v1/doctors?experience[gte]=5&experience[lte]=10

http://localhost:5000

41. GET - COMBINED FILTERS WITH SORTING AND PAGINATION 

http://localhost:5000/api/v1/doctors?experience[gte]=5&consultationFee[lte]=700&sort=-experience&page=1&limit=5

42. GET - IMPLEMENT DOCTOR SEARCH

http://localhost:5000/api/v1/doctors?search=Dr. Priya Sharmahttp://localhost:5000/api/v1/doctors?search=Dr. Priya Sharma