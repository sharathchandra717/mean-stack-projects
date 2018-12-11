# Difference between Monolithic and Microservice Architecture
|Monolithic Architecture   |Microservices based Architecture   |
|:---|:---|
|Gets bigger and bigger over iterations, and becomes difficult to manage and takes really long to startup, if the application is too big.   |The size will remain substantially smaller, as each component is dissected to smaller services.   |
|Continues deployment becomes difficult, as a small change to a component in the application, requires redeployment of the entire application.   |Continues deployment is possible here, as each service can be deployed independent of each other.   |
|Scaling of application requires entire application scaling(ie: to launch multiple instances of the big monolithic application to serve the need), even though only one small part of the application is resource intensive.   |Scaling of individual component is possible here, as each different component is de-coupled to different services, and can be scaled up horizontally and individually.   |

  
## Disadvantages of monolithic architecture:
* Large monolithic code base makes complicated to understand, especially for new developer
* Scaling become challenging
* Continuously integration / deployment become complex and time consuming. You may require dedicated team for build and deploy
* Overloaded IDE, Large code base makes IDE slow, build time increase.
* Extremely difficult to change technology or language or framework because everything is tightly coupled and depend up on each other.

## Advantages of microservice architecture:
* Each microservice is small and focused on a specific feature / business requirement.
* Microservice can be developed independently by small team of developers (normally 2 to 5 developers).
* Microservice is loosely coupled, means services are independent, in terms of development and deployment both.
* Microservice can be developed using different programming language (Personally I don't suggest to do it).
* Microservice allows easy and flexible way to integrate automatic deployment with Continuous Integration tools (for e.g: Jenkins, Hudson, bamboo etc..). The productivity of a new team member will be quick enough.
* Microservice allows you to take advantage of emerging and latest technologies (framework, programming language, programming practice, etc.).
* Microservice is easy to scale based on demand. In a nutshell, monolithic vs microservice architecture is like elephant vs ant approach. What you wants to build a giant system like elephant or army of ant, small, fast and effective.
