
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import BlogPage from './components/BlogPage';
import Resume from './components/Resume';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import deathStar from './components/assets/deathStar.JPG'
import roboCar from './components/assets/roboCar.JPG'
import _3DPrinter from './components/assets/3Dprinter.JPG'
function App() {
  return (

    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog1" element={<BlogPage />} />
        <Route path="/blog/deathstar" element={<BlogPage 
          picture={deathStar} 
          title='Death Star' 
          intro="This project stemmed from me wanting to give my nephew his first gift. My Nephew Elliot was born in March of 2021. However,
          due to the fact that we were still in the middle of a pandemic and my brother and sister-in-law lived in Orlando, Florida, I could
          be there for the birth or even for the upcoming months because of the risk of exposing my baby nephew. I was dead set on finding 
          something I could do for my nephew, but what do you do when you're so far away? Then one day, while comptemplating what do 
          I print next, I came across a night light print that looked like the moon and I thought that was perfect for my nephew. One thing, 
          I am a huge Star Wars fan and wanted to imprint that love for the series as soon as I could. So I took the idea and made it my own by 
          modelling a Death Star Version."
          body="It turns out the easiset part was creating the Death Star model. To print it not so much. It took 4 days of non-stop printing, which turned
          into almost a week of total printing time becasuse of a power outage that made the print fail at a really inconvenient point. Then the actual work 
          started. To complete this project I had to be able to program a microcontroller, create a wiring diagram and solder for the first time ever. Looking 
          back its not that hard of a task, but then I had no experience. I didn't even know how to upload the code to the raspbery pi pico. It was very daunting
          and a lot of the tutorials weren't helping at all. It probably took me a day to figure out how to upload code to just make the led blink on microcontroller 
          board. Once I got it, it was the best feeling in the world and made me fall in love with this type of work. From there I was able to light up a neopixel ring
          that would light up the Death Star when plugged in."
          outro="This is one of my favorite projects I have ever made so far. Especially, because I get to share it with my nephew. As I work more on different projects, 
          I make sure to remember the feeling I got when this finally came together. As long as you stay persistent and work hard, it will eventually work out and also that failure is 
          apart of the process. I take that ideology into any of my work, whether its creating a web app, practicing Java, or building something." 
          one='3D printer'
          two='Soldering Iron'
          three='Neopixel Ring'
          four='Wire'
          five='Raspberry Pico'
          six='USB Cable'
          />} />

          <Route path="/blog/linecar" element={<BlogPage 
          picture={roboCar} 
          title='SUNY Ulster Line Car' 
          intro="This project was apart of the final exam for the Intro to Robotics class at SUNY Ulster. In this project the goal was to not inly create a 
          car that would follow a path on the ground, it had to be able to detect colors to tell the car to stop and slow down while also being able to follow
          the path of the road"
          body="There are many solutions to this problem like using machine learning or something to that effect. In this project we used a color sensor and and arduino 
          to get the same effect. With the arduino we were able to get the car to make two different motions, turn right and turn left. With those motions we had the color 
          sensor sense when the car was over the 'road' or over the tile (white and black) and direct the motors to either make the car go right when over top of the road or 
          go left when off the road. The hard part came when trying to make the car stop at a stop sign (red paper in the road). This is when we had to use the full extent of
          the color sensor to sense the color red." 
          outro="This was definitely one of my favorite projects of the semester. I was able to learn how to put so many different components together and make them all work together.
          While the car may not have been the fastest, I was still very happy with the work I did and I am super excited to continue to work ont these types of projects outside of school."
          one='Car chasis'
          two='Arduino Uno'
          three='2x Motors'
          four='Wire'
          five='Color Sensor'
          six='Resistors'
          />} />

        <Route path="/blog/enclosure" element={<BlogPage 
          picture={_3DPrinter} 
          title='3D Printer Enclosure' 
          intro="For the Pandemic, like a lot of other people, I got into many different hobbies to take up my free time. Then I came across the wonderful world of 3D pritning
          and I was absolutely hooked. I read everything I could on the topic. The problem, however, was I did not in fact own a 3D printer. Luckily, at this time everything wasn't 
          completely backed up. So, I was able to get one pretty quick. One thing I learned pretty quick about 3D printing is that warping is going to be your worst nightmare. There are 
          plenty of ways to combat this, but the only one that seemed to work was making an enclosure for the printer, as any temperature change, or even a slight breeze can throw the 
          whole print off. "
          body="My first iteration of the enclosure was very rudimentary. I made a box with pvc pipe as the frame and reflective insulation to keep the heat in and the drafts out. This worked
          for a while, it is actually what I printed the Death Star in. However, I came to realize that it wasn't going to be the best when it comes to maintenance in the long run. So I spent some 
          time contemplating what the best enclosure would look like. I tried looking at what other people did but I couldn't find any plans that would work for my ideas. It took me a bit but then 
          I finally came up with something that would hit all my needs. " 
          outro="This was definitely one of my favorite projects of the semester. I was able to learn how to put so many different components together and make them all work together.
          While the car may not have been the fastest, I was still very happy with the work I did and I am super excited to continue to work ont these types of projects outside of school."
          one='1/2 in Plywood'
          two='Hinges'
          three='Drawer Slides'
          four='Led Lights'
          five='Acrylic Glass'
          six='Fasteners'
          />} />
      </Routes>
    </Router>
  );
}

export default App;
