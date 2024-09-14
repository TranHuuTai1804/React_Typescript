import React from 'react';
import './App.css';

const App: React.FC = () => {
    const handleClick = () => {
      const bodyElement = document.getElementById('body');
      const buttonElement = document.getElementById('button');
  
      if (bodyElement && buttonElement) {
        bodyElement.classList.add('show');
        bodyElement.classList.remove('hide');
        buttonElement.style.display = 'none'; // Gán giá trị cho thuộc tính display
        document.body.classList.add('background');
      }
    };
  
    const handleClickOutside = (event: MouseEvent) => {
      const bodyElement = document.getElementById('body');
      const buttonElement = document.getElementById('button');

      if (bodyElement && buttonElement && !bodyElement.contains(event.target as Node) && event.target !== buttonElement) {
        bodyElement.classList.add('hide');
        bodyElement.classList.remove('show');
        buttonElement.style.display = 'block'; // Gán giá trị cho thuộc tính display
        document.body.classList.remove('background');
      }
    };

      const handleCloseClick = () => {
        const bodyElement = document.getElementById('body');
        const buttonElement = document.getElementById('button');

      if (bodyElement && buttonElement) {
        bodyElement.classList.add('hide');
        bodyElement.classList.remove('show');
        buttonElement.style.display = 'block'; // Hiện lại nút button
        document.body.classList.remove('background');
      }
    };
  
    React.useEffect(() => {
      document.addEventListener('click', handleClickOutside);
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, []);

  return (
    <div>
      <button id="button" onClick={handleClick}>Productiv</button>
      <div id="body" className="hide">
        <section id="productiv">
          <div className="pro-head">
            <h1>Producttiv.</h1>
            <img onClick={handleCloseClick} src="./icons/close.png" alt="" id='close'/>
          </div>
          <div id="details">
            <div className="tasks">
              {/* Task 1 */}
              <article className="task">
                <img src="./icons/task-1.png" alt="" className="icon" />
                <div className="content">
                  <h2 className="content-header">Current task</h2>
                  <p className="content-desc">Task ABC (sh xm left)</p>
                </div>
              </article>

              {/* Task 2 */}
              <article className="task">
                <img src="./icons/task-2.png" alt="" className="icon" />
                <div className="content">
                  <h2 className="content-header">Upcoming task</h2>
                  <p className="content-desc">Task XYZ</p>
                </div>
              </article>
            </div>
            <div className="features">
              <a href="#" className="feature">
                <img src="./icons/pen.png" alt="" className="fea-icon" />
                <p className="fea-desc">Create task today this page</p>
              </a>
              <a href="#" className="feature">
                <img src="./icons/needie.png" alt="" className="fea-icon" />
                <p className="fea-desc">Bookmark this page in backlog</p>
              </a>
              <a href="#" className="feature">
                <img src="./icons/calendar.png" alt="" className="fea-icon" />
                <p className="fea-desc">Open Productiv</p>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
