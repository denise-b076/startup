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
AWS, or Amazon Web Services, has many services that you can use to rent and set up a web server for your application. The two that I have used so far are [EC2](#ec2) and [Route 53](#route-53). Below are my notes on each of them.

### EC2
EC2 allows you to create an instance on an AWS server. For this class, we are using a server in Virginia, but they have other regions available. To launch your instance, you first need to select an Amazon Machine Image (AMI) to use as the base for your server. It contains the software configuration (operating system, application server, and applications) required to
launch your instance. Then you select an instance type that depends on how much power you want and how much you want to spend. Then, you need to create a key pair so you can secure shell (ssh) into the server. Then, you auto-assigna public IP address, and select your security settings. Finally, after selecting launch instance, you can now find the server under the public IP address. You can also remote shell into the server using the key pair you created and your IP address like so:

```
➜  ssh -i [key pair file] ubuntu@[ip address]
```

The IP address for my server is 52.5.134.233

### Route 53
Route 53 is what allows you to register domain names so those who access your application don't have to remember the IP address to access its webpage every time. It also allows you to create a secure (HTTPS) connection to your application, which you can't do with an IP address. It also lets you host your domain on Amazon's DNS servers, and create DNS records. 

First, to register a domain, you need to choose the TLD and root domain you want. The price of TLD's are different based on their popularity and credibility, so `.com` TLDs cost more than `.click` TLDs do. The root domain consists of the word or words you want to be searched with your domain. For example, my root domain is 'puroguramu', which consists of the Japanese anglicized katakana characters for プログラム, which means computer program or software. Once you find a domain you like that is available, you fill out your contact details and complete your order. 

Once your domain has been registered, you can use it to create DNS records that will map domain names to IP addresses (A records) or other domain names (CNAME records). By defining both a record for your root domain and a wildcard record for any subdomain of your root domain you can navigate to your server with either your domain name or a subdomain. For example, my web server can be reached by navigating the browser to puroguramu.click, simon.puroguramu.click, or startup.puroguramu.click

## HTML Notes

HTML is the main structure of a website. It allows you to plot a general layout for your application, and put placeholders for data will be later on. It doesn't look nice on its own, but is crucial to ensuring a website has the elements it needs to work. My application uses many elements, such as `<div>`, `<form>`, and `<table>`.

## CSS Notes
CSS, or Cascading Style Sheets, allow developers to improve the look of their application, whether for accessibility or aesthetic purposes. This can be done in 3 ways:

1. directly within an HTML element
2. at the top of an HTML document
3. in a separate CSS file

The most common way is through a separate stylesheet which is referenced by the HTML file. There can be multiple stylesheets for a single aplication, such as mine which has a `main.css` for overall style, and three other CSS sheets for specific styling on each page.

You can also reference other public stylesheets, known as CSS Frameworks, to give your website a more unified appearance and increase accessibilty. One such framework is Bootstrap, which I use throughout my application such as in buttons and table. These framework styles are accessed through giving your elements a specific class supported by the framework, and can be overridden if there are specific parts you would like to change, such as `color`.

Some parts of CSS focus on how an object looks, such as `background-color` or `font-style`. Others focus on an object's position on the page, such as `display:flex` or `padding`. By putting all of these elements together, you can make a webpage that is much more appealing to the user's eye.
