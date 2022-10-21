# Roles
Candidate
Hiring Manager
Admin

## Server URI - https://job-portal-asaduzzaman599.onrender.com/



## Hiring Manager routes (authorization required)
POST /jobs 				Create A Job need token from login

GET /manager/jobs 			Get all jobs of this hiring manager
> Verify the token and get the manager id from there to load manager specific jobs

GET /manager/jobs/:id 		Get a job details by id with applied candidates information and resume if any

> Authorize the route to check if this job is created by the hiring manager who is trying to see the job details 

PATCH /jobs/:id 	for Update a job


## Candidate routes

GET /jobs Get all Jobs 
> filter jobs by location, job type, salary range
> able to sort jobs

GET /jobs/:id	Get job details with hiring manager info

POST /jobs/:id/apply	Apply for a job
> Prevent apply after deadline
> If already applied, then can’t apply again
> Can upload a resume(pdf)(BONUS)
> ### Need user authorization token for candidates


## Auth routes
POST /user/signup			Signup/Register
POST /user/login			Login
> Generate and send a token as response

GET /user/me				Get user information by token
### Need user authorization token



## Admin routes (Need Tokan)
GET Admin/candidates Get All candidates
GET Admin/candidates/:candidateId Get candidate details by id (with applied jobs)
GET Admin/managers   Get All hiring managers
Patch Admin/make-managers/:managerId     Update user role to hiring manager

## More optional routes
Get /Jobs/highest-paid-jobs     Top 10 highest paid jobs
Get /jobs/highest-applied-jobs  Top 5 most applied jobs




MUST DOs
Must Create an advisor account with this credentials:
Email: admin@gmail.com
Password: Admin123#
