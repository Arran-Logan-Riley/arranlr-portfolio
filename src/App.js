import './App.scss';
import projects from './data/projects.json';
import skills from './data/skills.json';
import experience from './data/experience.json'
import { Helmet } from "react-helmet";

function App() {

  const renderExperienceCards = () => {
    return (
      <div className='cardsContainer'>
        {experience.map((data, cardKey) => {
          return (
            <div className='card'>
              <div className='cardContainer'>
                <h1>{data.experience}</h1>
                <h4>{data.time}</h4>
                <p>{data.description}</p>


                {<div className='littleCardContainer'>{data.tags.map((data, tagKey) => {
                  return (
                    /*Access experience.identifiers array to get the links (replaced spaces and special chacters) and put tags on the titles. */
                    <div className={"littleCard " + "colorDef" + experience[cardKey].identifiers[tagKey]}><a href={'#' + experience[cardKey].identifiers[tagKey]}><p>{data}</p></a></div>

                  )
                })
                }
                </div>
                }
              </div>
            </div>
          )

        })
        }
      </div>
    )
  }

  // Render multiple cards. Use "projects" import, then map that to data - as well as a key.
  const renderProjectCards = () => {
    return (
      <div className='cardsContainer'>

        {projects.map((data, cardKey) => {
          return (
            <div className='card'>
              <div className='cardContainer'>
                <h1>{data.title}</h1>
                {/*<img src="placeHolder" alt={"PLACEHOLDER " + data.title} />*/}
                <p>{data.Description}</p>
                <a href={data.link} target="_blank">{data.link}</a>


                {/* For each item, map the array of skills used in the project. Also using colorDef+data to refer to a background color for little cards depending on the skill*/}
                <div className='littleCardContainer'>
                  {data.tags.map((data, tagKey) => {
                    return (
                      /* Set a tag to div element of skill, so it links to the skill when clicked. */
                      /*Access experience.identifiers array to get the links (replaced spaces and special chacters) and put tags on the titles. */
                      <div className={"littleCard " + "colorDef" + projects[cardKey].identifiers[tagKey]}><a href={'#' + projects[cardKey].identifiers[tagKey]}><p>{data}</p></a></div>
                    );
                  }
                  )
                  }

                </div>
              </div>
            </div>

          );
        }
        )
        }
      </div>
    )
  }

  const renderSkillCards = () => {
    return (
      <div className='cardsContainer'>

        {skills.map((data, key) => {
          return (
            <div className='card'>
              {/* Use identifiers so special characters and spaces are replaced. */}
              <div className='skillLogoContainer' id={data.identifier}>
                <div className={'skillLogo' + data.image}></div>
              </div>
              <div className='skillSummaryContainer'>
                <h2>{data.skill}</h2>
                <hr></hr>
                <p>{data.summary}</p>
              </div>
            </div>
          );
        }
        )
        }
      </div>
    )
  }

  return (
    <div className="App">
      <Helmet>
        <title>Arran Logan-Riley Portfolio</title>
      </Helmet>

      <section class="top-nav">
        <div className='navBarTitle'>
          Arran Logan-Riley Portfolio
        </div>
        <input id="menu-toggle" type="checkbox" />
        <label class='menu-button-container' for="menu-toggle">
          <div class='menu-button'></div>
        </label>
        <ul class="menu">
          <li><a href="#home" >Home</a></li>
          <li><a href='#experienceSection'>Work Experience</a></li>
          <li><a href="#projectSection"> My Projects</a></li>
          <li><a href="#skillSection">My Skills</a></li>
          <li><a href='https://github.com/Arran-Logan-Riley' target="_blank">My GitHub</a></li>
          <li><a href='https://www.linkedin.com/in/arran-logan-riley-a84414192//' target="_blank">Linkedin</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </section>

       <div className='splitHome cardsContainer' id='home'> 
        <div className='card'>
          <h1 className='homeLeftHeader'>PORTFOLIO</h1>
          <div className='personalStatementContainer'>
            <h4 className='faderSlow'>My name is Arran Logan-Riley and I am a graduate of both Furtwangen University in Germany and the Eastern Institute of Technology in New Zealand.</h4>
          </div>
        </div>
        <div className='card '>
          <h1 className='homeRightHeader'>SOFTWARE DEVELOPER</h1>
          <div className='personalStatementContainer'>
            <h4 className='faderSlow'>I am a front-end or back-end junior developer with experience in data analytics and electronics.</h4>
          </div>
        </div>
      </div>

      <div className='experiences' id='experienceSection'>
      <div  className='button-19' ><a className='learnMoreButton' href='#experienceSection'>Learn More</a></div>
        <div className='experienceTitle'>
          <h1>Work Experience</h1>
          <hr></hr>
        </div>
        {renderExperienceCards()}
      </div>
      <div className='projects' id='projectSection'>
        <div className='projectTitle'>
          <h1>Significant Projects</h1>
          <hr></hr>
        </div>
        {renderProjectCards()}
      </div>
      <div className='skills' id='skillSection'>
        <div className='skillTitle'>
          <h1>My Skills</h1>
          <hr></hr>
        </div>
        {renderSkillCards()}
      </div>


      <footer id='contact'>
        <h1>CONTACT</h1>
        <hr></hr>
        <h2>arranlrbusiness@gmail.com +64 22468260</h2>
        <p>Made in React by Arran Logan-Riley.</p>
      </footer>

    </div>
  );
}

export default App;
