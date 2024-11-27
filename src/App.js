import "./App.css";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Notes from "./component/Notes";
import Photos from "./component/Photos";
import Utopia from "./component/notes/utopia";
import Beach from "./component/notes/beach";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="swicth">
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              path="/about"
              element={
                <About
                  title={
                    "If you enjoy biology and love attending hackathons or enjoy coding as a whole, hit me up, so we can collaborate."
                  }
                  subtitle={
                    " My interest in neuroscience, combined with my passion for coding and hackathons, presents a unique intersection of biology and technology. This blend of disciplines allows me to explore the intricacies of the human brain and apply computational methods to unravel its mysteries. My portfolio is a testament to this journey, inviting like-minded enthusiasts to collaborate and innovate at the crossroads of neuroscience and coding. Together, let's aim to push the boundaries of what's possible in both fields."
                  }
                />
              }
            ></Route>
            <Route path="/photos" element={<Photos />}></Route>
            <Route path="/notes" element={<Notes />}>
              <Route
                path="utopia"
                element={
                  <Utopia
                    paragraph1="When the airplane hit the ground, screeching to a halt along the tarmac,
        Chinelo looked out the plane to see a city shrouded in unusual darkness.
        It was only 7 p.m. She stepped off the plane and into the bustling
        airport. This was her first time in the city, a place she had only heard
        about through the enthusiastic tales of her twin brother, Emeka. Flush
        with anticipation, she gathered her luggage, replaying her brother's
        assurance of securing beautiful opportunities in the city in her mind.
        Emeka stood nervously beside a taxi at the airport gate, his heart
        thumping in his chest. He hadn't seen his sister in ten long years. Life
        had taken them on different paths across oceans and continents. Chinelo
        emerged from the arrivals gate, looking strikingly familiar yet foreign.
        She appeared demure, her stubborn afro slicked into a ponytail. Her
        eyes, sparkling with joy, met his, and at once, all the years of
        separation melted away, the world around them fading into a blur. They
        rushed across the terminal towards each other, and without a word, Emeka
        enfolded her in a fierce hug; heavy with emotion, Chinelo's breath
        escaped in warm puffs, misting over her tortoiseshell eyeglasses. After
        a seeming eternity, they finally pulled apart. Emeka guided Chinelo to
        the car and held open the backseat door for her. He then deposited her
        luggage in the trunk and circled the car, sliding in next to her.
        Excitedly, they chatted until Chinelo asked why he wasn't driving. The
        question hung in the air, and an awkward silence ensued, amplified by
        the soft purr of the car's engine. 'Do you even own a car?' she probed,
        her tone laced with skepticism. Once, Emeka had shared a photo of
        himself in a grey sportscar, and their family back home had cooed over
        its sleek beauty."
                    paragraph2="The silence returned, heavier. Some twenty minutes later, the driver
                    announced their arrival at 24 Turkeye Str., grinding to a halt in front
                    of an old Victorian house. The street was shrouded in darkness,
                    streetlights flickering dimly on and off. Once inside his apartment,
                    Emeka flicked on the lights, revealing a modest dwelling that sharply
                    contrasted with the luxurious penthouse from their video calls.
                    Chinelo's suspicions were confirmed - her brother had been weaving
                    tales. Emeka led her to a room before disappearing into the kitchen to
                    prepare a meal. The tantalizing aroma of jollof rice filled the air, and
                    Chinelo joined him at the dining table. The tension from earlier was
                    still palpable. Emeka crossed himself and recited the grace before the
                    meal, a small attempt to dispel the unease. As they ate, Chinelo
                    broached the subject of the house, her uncertainty about his promise of
                    securing a job for her evident in her voice. With tears glistening in
                    his eyes, Emeka admitted, 'I...I don't own a car but pay rent for this
                    place.' His voice was barely a whisper, his confession hanging heavily
                    in the air. Chinelo merely nodded, her expression inscrutable. 'Chinelo,
                    I'm sorry,' he said, 'I didn't lie to you. I simply moved away from
                    Salesforce Tower, where everyone lived as equals. Everyone shared
                    possessions, and I could have a different car every day. That was life
                    in Salesforce.' Incredulous, she fixed him with a burning stare and
                    leaned forward, planting her elbows on the table. 'Why did you leave?'"
                    paragraph3="Perched atop a monolith in the heart of California, the Salesforce Park
                    was a hidden sanctuary above the clouds, far removed from the din and
                    clamor of San Francisco's streets. A forest of ancient Oak and giant
                    Redwood trees, arranged in 13 different botanical areas, stretched
                    across its landscape, their leaves whispering stories of the world
                    below. North of the park, the Australian Garden boasted fragrant
                    lavender bushes and a lush canopy that deflected sunlight, creating a
                    natural habitat for urban wildlife. Tinkling laughter filled this place
                    from children darting around the quaint little shops nested in the woods
                    and across the domed community amphitheater. Elderly folks basked in the
                    sun's warmth. The unique Bus Fountain added to the charm with a million
                    tiny geysers, creating a brilliant rainbow-hued water display.
                    Underneath the city was the Free Transit Center, whose 100 electric
                    buses, about one-tenth striped with the colors of the rainbow, were
                    wired to trigger motion sensors activating the Bus Fountain. Beautiful
                    as it was, Salesforce had no rulers. Like the Igbos, the community -
                    only a thousand strong - was self-governed, with designated guardians
                    called the Asfaleians—men and women dressed in black clothes and
                    embossed green armor. The Asfaleians controlled the population and
                    tended the gardens. In Salesforce City, we sacrificed our privacy for
                    happiness and beauty. Every corner of the city was brightly illuminated,
                    with cameras placed every three feet, even in homes. Once, I was
                    visiting the end of the city. Sitting in the free transit center, I
                    counted 24 cameras, excluding those mounted on the bus. 'Sis, I'm 34
                    years old now. Don't you wonder why I don't have a family yet? Imagine
                    making love with your spouse under network surveillance. The fear of
                    having a set of twins, as runs in our family, scared me the most. One
                    couple who braved it had a set of twins. During the delivery, ten
                    Asfaleians stood guard. As soon as the doctors pulled the babies from
                    their mother, they whisked away one twin and made a cult-like procession
                    to the Salesforce Park. There, they sedated the baby and dismembered it,
                    draining the blood into the garden sprinkler. Many nights after, I
                    listened to the tortured screams of the bereaved mother. I left the city
                    shortly afterward. The alarm buzzed 10 p.m., and Emeka rose. 'I will get
                    you that job like I promised, Chinelo. If you want to move to Salesforce
                    City after working for a few months, the choice is yours.' Drawing paper
                    from the stack of documents and books on a side table, he scribbled 425
                    Mission Street. Turning, he called softly, 'Goodnight, sis.'"
                    title="Salesforce Utopia"
                    time="Written on Nov. 30, 2023"
                  />
                }
              />
              <Route
                path="pos-psychology"
                element={
                  <Utopia
                    title="Notes on Positive Psychology"
                    paragraph1="Most times, our mind lies to us and tricks us into thinking that the things we think we get happiness from makes us happy. 
                    In fact, it's not. For instance, we tend to think that having good grades, having money, having flashy cars, watching Netflix, 
                    and using social media brings us happiness; however, they don't. It's some really simple things that we often overlook that bring us bouts of happiness. 
                    Things like Kindness, Real-time social connection, flow and fun. These are activities that bring us happiness. 
                    Now, let's take an in-depth look into some of those activities."
                    paragraph2="
                    Social Connections: We get happiness by literally talking to people. In fact, a study that had people self-report their feelings on a scale of 1-10 after having a conversation reported a boost in happiness level. To further show this, a study which was carried out in a train where everyone faced his/her business forced people to talk with strangers. As control, some commuters were asked to not talk to anyone throughout the journey. After the ride, a survey was taken and the result of the survey showed a significant boost in happiness levels for those that were forced to talk to other commuters. This goes a long way to tell us how much talking to people can do for us. Don't only talk to people, put in time to maintain friendships and join faith-based communities or communities that share your values. Another study showed that people that were actively involved in faith-based communities had higher happiness levels compared to people who weren't involved in those communities. Not because of their spirituality or their relationship with God but because of communion with one another.
                    "
                    paragraph3="
                    Kindness: We also obtain happiness from giving out our discretionary funds(kinda like spare money). Now being kind does a whole lot for us apart from bringing us happiness. A study by Elizabeth Dunn and colleagues (I remembered this one; it was too interesting to forget 😃) showed that doing nice stuffs actually reduces your blood pressure (this is not some pseudo-information, the data speaks for itself) and reduces the hormone, cortisol, that induces stress. Back to happiness, Elizabeth, again, conducted another study where she handed out $5 and $20 to random people but instructed them to either treat themselves to something good or be charitable with the money.
                    "
                    paragraph4="She also made them agree to having a call later in the day to know how they spent the money and do some survey. At the end of the study, she discovered that those people that spent the money on other people had a significantly higher happiness level than those people that treated themselves to something special (you see our minds tricking us again, right?) It didn't stop there. After a period of 6 months when the same people that were given the money to self reported some information, the result showed that those people who were charitable with the money still had higher happiness levels because of the impact of their act. The happiness level of those that were charitable with the $5 was equal to the happiness level of those that were charitable with $20. I know what you're thinking but don't give any less. Another study showed that people who give more money naturally have a decreased level of cortisol.
                    I understand that not everyone has money, but you can decide to open the door for someone to walk through or say something nice to someone.
                    "
                    time="Apr. 10, 2023"
                  />
                }
              />
              <Route
                path="jewel-cove-1"
                element={
                  <Beach
                    title="The Jewel Beach"
                    paragraph1={`
                
                    For over three months, Dylan had been wrestling with many thoughts: his emotional well-being, his academics, his family, and most importantly, those he called "friends." Parts of his life begged for redefinition. Until that Sunday evening, he believed he had everything under control.
                
                    Donning his rusty yet cherished sneakers and his unwashed yellow snapback—left untouched for months to preserve the scent of the home he had left so long ago—Dylan pulled on a sweatshirt from the co-educational advising group where he served as a mentor. After punching in the door code, he stepped inside. As he eased the door open, he swiftly turned, reaching for the doorknob one would grasp when leaving the room, and held the door until the latch clicked into place—a sound that sometimes sent a thrill through him.
                
                    Before him stood only two people: two females. One didn't quite fit his label of "girl"; as he would later learn, her life held experiences—some bitter, some traumatic, and many awe-inspiring—that made "woman" more fitting. The woman stood on one side of a desk—the kind typically manned by security or reception—while the girl, acting as the receptionist, was on the other side. Dylan was quite acquainted with the girl, but the woman was a mystery.
                
                    The woman turned swiftly, and Dylan caught a glimpse of her gloomy yet glistening eyes. Summoning his deep baritone—a voice that flourished with confidence and faded with self-doubt—he introduced himself.

                    "Olivine," she replied, maintaining unwavering eye contact. As was his habit, Dylan asked his favorite icebreaker, "How do you spell Olivine?" and proceeded to spell it out.
                
                    "That's correct," she affirmed.
                
                    Noticing the luggage beside Olivine, Dylan surmised she was either arriving or departing.
                
                    "Do you go here?" he inquired.
            
                  `}
                    paragraph2={`
                
                    Drawn by the movement, he turned to see one of his superiors—a "veteran"—accompanied by a few others he recognized through mutual connections on LinkedIn.
                
                    "When did you arrive, my guy?" Dylan asked Tochukwu, who sat between a girl and a boy.
                
                    "Yesterday," came the reply. After exchanging a few more pleasantries with Tochukwu, Dylan shook hands with the others, who seemed ready to plot his demise given the way he had intruded upon their conversation.
                
                    "Nice to meet you both. Sorry to interrupt—I’ll leave you to it." Spotting another familiar face, he called out, "Carlson!" The surprise was evident; Carlson didn't know Dylan, but Dylan knew him. Yet another round of introductions ensued.
                
                    `}
                    paragraph3={`
                    Another weekend at last. Dylan's internship had been fascinating but mentally taxing—and, to some extent, physically draining. To celebrate a week of hard work, he decided to indulge his cravings. Pulling out his cooking bag, he laid out a small tuber of yam, a vial of curry powder whose aroma filled the room as soon as he opened it—evoking memories of home-cooked meals shared with loved ones—some salt, onions, the game-changing ingredient of red palm oil, and a few plates.
                
                    The kitchen was a bit of a trek—down on the second floor. But there was hope this time: the elevator was operational. Anyone from the fifth floor could access it from the fourth, so Dylan descended one flight and then took the elevator.
                
                    In the kitchen, he retrieved his frozen mackerel from the fridge, carefully removing the eyes and deboning it, slicing the fish laterally with a sharp silver knife. He set the fish to simmer in its own juices on the stove. Meanwhile, he peeled the scaly skin from the yam, revealing the edible flesh beneath, and diced it into bite-sized arcs. As he worked, someone who had entered the kitchen earlier and was about to leave suddenly noticed the red oil and appeared shocked.
                  `}
                    time="Published on Nov. 25, 2024"
                  />
                }
              />
              <Route
                path="jewel-cove-2"
                element={
                  <Utopia
                    title="The Jewel Beach"
                    paragraph1={
                      <em>
                        I feel your presence when I’m not around you. Queen in
                        the city, they need to crown you; holy water, baby,
                        lemme drown you," the music in his earbuds crooned,
                        reaching a climax before he slipped them into his
                        pocket.
                      </em>
                    }
                    paragraph2={
                      <p>
                        "How urgently do you need a kettle?" he asked, noticing
                        the girl fumbling with a broken appliance.
                        <br />
                        <br />
                        "Really urgently!" she exclaimed, a hint of desperation
                        in her voice.
                        <br />
                        <br />
                        "I could lend you mine, but you'll have to return it,"
                        Dylan offered as he headed back to his room to retrieve
                        his kettle.
                      </p>
                    }
                    paragraph3={
                      <p>
                        Adjacent to the kitchen was the dining room. At its
                        center stood a large round table surrounded by chairs,
                        reminiscent of a royal court. Seated there were Hameed
                        and Fakey, both engrossed in their meals and animated
                        conversation about a planned road trip. After about five
                        minutes, Dylan returned with the kettle. The girl
                        thanked him sincerely. Before putting his earbuds back
                        in, he turned and saw someone familiar emerging from the
                        pantry stocked with everything from veggies to cereals
                        to cleaning supplies. It was Olivine, and she was with
                        the girl who needed the kettle.
                        <br />
                        <br />
                        "It's you, right? The one from the school in the other
                        county? Olivine?" Dylan said, a hint of surprise in his
                        voice.
                        <br />
                        <br />
                        "Yes, you remember!" she replied, trying to mask the
                        delight in her voice. "You have a good memory. Thanks
                        for lending us your kettle. It's actually a lot cleaner
                        than the one that was here."
                        <br />
                        <br />
                        "First of all, are you two roommates?" Dylan asked,
                        genuinely surprised. "Secondly, do you mean what you
                        just said about my kettle?" He glanced at it, noting its
                        less-than-pristine condition with pockets of dirt. "Or
                        are you being sarcastic?"
                        <br />
                        <br />
                        "I'm very serious," she assured him.
                        <br />
                        <br />
                        "Oh, thanks! That means a lot," Dylan said, smiling.
                      </p>
                    }
                    paragraph4={
                      <p>
                        He slipped his earbuds back in and resumed his cooking.
                        It was time to add the special ingredient. As he opened
                        the pot, the rich aroma of fish and yam mingled and
                        wafted through the room, catching the attention of
                        others using nearby stoves. He poured a generous amount
                        of red palm oil into the boiling mixture to enhance the
                        flavor and aesthetics.
                        <br />
                        <br />
                        "What's with the red spice?" Olivine asked, her
                        curiosity piqued.
                        <br />
                        <br />
                        Dylan explained what it was, and she seemed intrigued.
                        <br />
                        <br />
                        "Can I try it?" she asked.
                        <br />
                        <br />
                        "Um, yeah, but it's pretty bland on its own," he
                        cautioned.
                        <br />
                        <br />
                        "Does it contain nuts? I have a nut allergy," she said.
                        <br />
                        <br />
                        "It's made from palm nuts, so I'm not sure how you'd
                        react," Dylan replied, a note of concern in his voice.
                        <br />
                        <br />
                        "It's fine," she said, dipping her delicate finger into
                        the bottle and touching it to her lips. "It is really
                        bland," she remarked, meeting his gaze.
                        <br />
                        <br />
                        For the first time, Dylan noticed something stirring
                        within him. Her eyes were stunning, captivating. He
                        tried to compose himself. "Would you like to try what
                        I'm cooking when it's done?" he offered.
                        <br />
                        <br />
                        "Sure," she agreed, walking back into the dining room.
                        <br />
                        <br />
                        Hameed and Fakey finished their meals and joined Dylan
                        in the kitchen. They laughed about his habit of cooking
                        in large quantities; Hameed had even nicknamed him "Mass
                        Production." As they chatted about the road trip, Dylan
                        continued preparing his meal. The dish was nearly ready.
                        He began transferring the food from the large pot into
                        Tupperware containers for storage. As he did so, Olivine
                        returned to the kitchen, this time with a bowl in her
                        hands, ready to wash it.
                        <br />
                        <br />
                        "Would you like to try it now?" he asked.
                        <br />
                        <br />
                        "I just ate, but I don't mind trying a little," she
                        replied. "It looks very spicy."
                        <br />
                        <br />
                        "Are you concerned?" Dylan asked.
                        <br />
                        <br />
                        "No, I love spicy food. Can I taste it?"
                        <br />
                        <br />
                        "Yeah, go ahead."
                        <br />
                        <br />
                        She dipped her spoon into the hot pottage and took a
                        small sample.
                        <br />
                        <br />
                        "Is that all?" Dylan asked, a bit surprised.
                        <br />
                        <br />
                        "I'm very picky," she admitted. "I can't eat much
                        because I just ate, but I like it. It's very tasty."
                        <br />
                        <br />
                        Hameed and Fakey stood nearby, now quieter as they
                        pretended not to notice the exchange. Dylan turned to
                        them.
                        <br />
                        <br />
                        "So what's the itinerary?" he asked.
                        <br />
                        <br />
                        Fakey responded, "We'll drive to Lake Tahoe, then to
                        Vegas, and then to the Grand Canyon..."
                        <br />
                        <br />
                        "That sounds very interesting," Olivine commented. "And
                        you guys are driving all the way?"
                        <br />
                        <br />
                        "That's right," Hameed confirmed.
                        <br />
                        <br />
                        "Where are you both from?" she asked.
                        <br />
                        <br />
                        They each told her, and soon, she and Fakey discovered
                        they shared a common language, slipping into animated
                        conversation. As they delved into the details of the
                        trip, Dylan focused on packing his food. He increased
                        the volume of his music to drown out the background
                        chatter, concentrating on his task.
                        <br />
                        <br />
                        By the time he finished cleaning up and storing the
                        communal dishes, they had all left. The day was drawing
                        to a close. Dylan made his way back to his room, the
                        events of the evening playing over in his mind. He
                        couldn't shake the image of Olivine's captivating eyes
                        and the unexpected connection they'd shared. As he
                        settled in for the night, he wondered what the coming
                        days might hold.
                      </p>
                    }
                    time="Published on Nov. 27, 2024"
                  />
                }
              />
            </Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer music={"Been so Good by Elevation Worship"} />
      </div>
    </Router>
  );
}

export default App;
