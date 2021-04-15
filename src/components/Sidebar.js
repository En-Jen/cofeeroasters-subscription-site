import React from 'react';
import styled from 'styled-components/macro';

import { questions } from '../data';

function Sidebar() {
	return (
        <aside>
            <nav role="navigation" aria-label="Order Form Navigation">
                <ul role="list">
                    {questions.map((item, i) => (
                        <li key={i}>
                            <a href={`#question-${i + 1}`}>
                                <span>0{i + 1}</span>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>	
	);
}

export default Sidebar;
