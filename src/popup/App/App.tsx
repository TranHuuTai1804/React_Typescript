import React from 'react';
import './App.css';

const App: React.FC = () => {

    return (
      <div>
        <div id="body" className="show">
            <section id="productiv">
                <h1>Producttiv.</h1>
                <div id="details">
                    <div className="tasks">
                        {/* Task 1 */}
                        <article className="task">
                            <img src="./icons/task-1.png" alt="Task 1" className="icon" />
                            <div className="content">
                                <h2 className="content-header">Current task</h2>
                                <p className="content-desc">Task ABC (sh xm left)</p>
                            </div>
                        </article>

                        {/* Task 2 */}
                        <article className="task">
                            <img src="./icons/task-2.png" alt="Task 2" className="icon" />
                            <div className="content">
                                <h2 className="content-header">Upcoming task</h2>
                                <p className="content-desc">Task XYZ</p>
                            </div>
                        </article>
                    </div>
                    <div className="features-container">
                        <div className="features-line"></div>
                        <div className="features">
                            <a href="#" className="feature">
                                <img src="./icons/pen.png" alt="Pen" className="fea-icon" />
                                <p className="fea-desc">Create task today this page</p>
                            </a>
                            <a href="#" className="feature">
                                <img src="./icons/needie.png" alt="Needie" className="fea-icon" />
                                <p className="fea-desc">Bookmark this page in backlog</p>
                            </a>
                            <a href="#" className="feature">
                                <img src="./icons/calendar.png" alt="Calendar" className="fea-icon" />
                                <p className="fea-desc">Open Productiv</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
);
};

export default App;
