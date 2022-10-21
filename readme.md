# Roles
Candidate
Hiring Manager
Admin

## Server URI - https://job-portal-asaduzzaman599.onrender.com/



## Hiring Manager routes (authorization required)

<b>POST /jobs</b>
Create A Job need token from login

<b>GET /manager/jobs</b> 			
Get all jobs of this hiring manager

> Verify the token and get the manager id from there to load manager specific jobs

<b>GET /manager/jobs/:id</b>
Get a job details by id with applied candidates information and resume if any

> Authorize the route to check if this job is created by the hiring manager who is trying to see the job details 

<b>PATCH /jobs/:id</b> 	
for Update a job


## Candidate routes

<b>GET /jobs</b> 
Get all Jobs 

> filter jobs by location, job type, salary range
> able to sort jobs

<b>GET /jobs/:id</b>	
Get job details with hiring manager info

<b>POST /jobs/:id/apply</b>	
Apply for a job

> Prevent apply after deadline
> If already applied, then can’t apply again
> Can upload a resume(pdf)(BONUS)
> ### Need user authorization token for candidates


## Auth routes

Signup/Register
<b>POST /user/signup</b>			

Login
<b>POST /user/login</b>			
> Generate and send a token as response

Auth Check
<b>GET /user/me</b>				
Get user information by token
### Need user authorization token



## Admin routes (Need Tokan)

<b>GET Admin/candidates</b> 
Get All candidates

<b>GET Admin/candidates/:candidateId</b> 
Get candidate details by id (with applied jobs)

<b>GET Admin/managers</b>   
Get All hiring managers

<b>Patch Admin/make-managers/:managerId</b>     
Update user role to hiring manager

## More optional routes
<b>Get /Jobs/highest-paid-jobs</b>     
Top 10 highest paid jobs

<b>Get /jobs/highest-applied-jobs</b>  
Top 5 most applied jobs



advisor account with this credentials:
Email: admin@gmail.com
Password: Admin123#
