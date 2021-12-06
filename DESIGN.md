Design Decisions

While building the NL Design Skeleton application we must occasionally make decisions, the main decisions are noted here to provide a hook for future decisions and give insights into the thoughts behind te projects. This in turn should help developers with there choices when they want to contribute code.

# Docker first
The NL Design Skeleton application is first and foremost design to support rapid prototyping of dutch governmental applications and the [Common Ground](https://commonground.nl/) ecosystem. As such it adheres to the [Common Ground](https://commonground.nl/) design principles and underlying standards like [NL Design System](https://designsystem.gebruikercentraal.nl/). That means that the application is meant to be installed as a Kubernetes container on a [Haven](https://haven.commonground.nl/) cluster. Appropriate helm installation files for this application are included and the application is listed on [Artifact Hub](https://artifacthub.io).

This also means that the local development environment is based on containers run on [docker](https://docker.com) desktop, and that the [installation guide](README.md) is written as such. This however doesn’t mean that the application can’t be run like a standard node.js/gatsby application. You can do so by running the appropriate commands from the /pwa folder.

# Static build and gateway usage
The skeleton application follows the principle of static build, this is partly done because it provides better speed, caching and cdn options but also because it means we can hash external files (a requirement for the DigiD login provider csp headers). Lastly it allows us to serve the application directly from github pages making for easy development experience and tying your review environment directly to your code repository.   

It does however also mean that the application is dependent on an api for all of its interactive content and user verification. for this we use the [Common Ground api gateway](https://github.com/ConductionNL/commonground-gateway) which is another open source project. Both the [Common Ground](https://commonground.nl/) api gateway and its ui are automatically included as a docker image when you spin up the application with docker-compose. 

# Bootstrap and Font-Awesome as a backup for NL Design
[NL Design System](https://designsystem.gebruikercentraal.nl/) is a great concept, but it isn’t quite there yet. To prevent developers from running into blocking dependencies for production applications we included bootstrap (graphical elements) and font-awesome (icons) as stop gap measures. Be aware do that these are temporary fixes, and will be phased out over time.