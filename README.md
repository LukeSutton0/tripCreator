# tripCreator - JS frontend
Cloud computing solution for a trip creator/manager. This repository is the front end, allowing users to access the back end API using HTTP json requests

**Overview**

This solution used a Javascript frontend to communicate with a tomcat server Java REST API hosted on the Azure Cloud.

The website allows users to manage Trip planning in large groups. Multiple users were able to utilise the server at the same time, 
allowing concurrent usage using JavaScript’s asynchronous fetch method and rabbit MQ. 


Up to date weather data - Open Weather Map API - https://openweathermap.org/api

Backup weather data - 7 Timer - https://www.7timer.info/doc.php

User Ids - Random API - https://random-data-api.com/


**System Layout:**

<img src="https://github.com/LukeSutton0/tripCreator/assets/80263461/c2d77f8c-ea42-4eea-a506-4a32502fbef6" width="400">



**Features** 

The orchestrator was created as a rest service running on a tomcat server. This server was hosted on a small UK based Linux virtual machine on the Azure Cloud, specifically the B2 series. 

This machine had the possibility to be resized if demand for the virtual machine required more resources.

This machine in particular had 4 Gibs of RAM, 2 virtual CPUs and 1280 concurrent inputs and outputs (I/O) per second. This quantity of resources was more than enough for a small user base of less than 1000 people.

The SQL database used in the system was also hosted on Azure but separately to the virtual machine. The database utilised the elastic pool feature; the elastic pool allows the database to group with other databases and share resources allocated


**Setup and Installation**

Setup unavailable due to Azure Cloud container lease no longer being available.

**Usage and Details**

• Add and remove trips

• See other user's trips

• See weather for trip using 

• Generate unique user/trip ID

• Query for new trips

• Express interest in trips

• Check for interests on his/her trips


**ChangeLog & Roadmap**

Final release has been completed.


