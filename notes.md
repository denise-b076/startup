# CS 260 Notes

[My startup](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## GitHub Notes

[Information found here](notes.md)

## Specification Notes
In order to stay organized and consistent while creating a web application, it is important to specify what it should be doing, even before beginning to code. This can include many elements, but the ones I will be referencing include:

1. [An elevator pitch](#elevator-pitch)
2. [A design](#design)
3. [Key Features](#key-features)
4. [Technologies](#technologies)

Each of these aspects help maintain a clear idea of what you are attempting to do for users, and by extension what you need to do for your application to be successful.

### Elevator Pitch
The purpose of an elevator pitch is to provide a concise explanation for what problem your application is trying to solve and how said application solves it. It can be very useful in helping you quickly identify what you want your application to accomplish before delving into _how_ to accomplish it. Additionaly, it ensures you maintain a mindset of how _others_ will interact with what you create, maintaing a clear purpose in what you are doing. 

### Design
The design does not need to be very complicated initially, but gives you a blueprint for what your application should generally look like. This includes outlining where all your _visible_ features should lie. By creating a design early on, you provide yourself with a solid outline for HTML and CSS.

### Key Features
This is one of the _most important_ things to identify. Key features establish clear goals for the application to accomplish, and can act as checkpoints for progress. While the elevator pitch provides the framework of an application, key features flesh it out by breaking down the steps necessary to carry out the pitch's solution. 

### Technologies
Once you understand what key features your application will have, you should identify what technologies you will be using to achieve said features. By specifying what each technology is going to do, you are better able to outline what you need to accomplish as you create your application. These technologies can differ based on the complexity of your application, but some include HTML, React, WebSocket, and JavaScript.

## AWS Notes
AWS, or Amazon Web Services, has many services that you can use to rent and set up a web server for your application. The two that I have used so far are EC2 and Route 53. Below are my notes on each of them.

### EC2
EC2 allows you to create an instance on an AWS server. For this class, we are using a server in Virginia, but they have other regions available. To launch your instance, you first need to select an Amazon Machine Image (AMI) to use as the base for your server. It contains the software configuration (operating system, application server, and applications) required to
launch your instance. Then you select an instance type that depends on how much power you want and how much you want to spend. Then, you need to create a key pair so you can secure shell (ssh) into the server. Then, you auto-assigna public IP address, and select your security settings. Finally, after selecting launch instance, you can now find the server under the public IP address. You can also remote shell into the server using the key pair you created and your IP address like so:

'''
➜  ssh -i [key pair file] ubuntu@[ip address]
'''

The IP address for my server is 52.5.134.233

## HTML Notes

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
