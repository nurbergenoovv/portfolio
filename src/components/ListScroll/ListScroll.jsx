import { useEffect } from 'react'; // Import useEffect for side effects
import styles from './ListScroll.module.css';

function ListScroll() {
    useEffect(() => {
        // Use useEffect to handle side effects
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery && !mediaQuery.matches) {
            const tagScroller = document.getElementById('tagScroller');
            const allTags = tagScroller.querySelectorAll('li');

            const createElement = (tagName, className = '') => {
                const elem = document.createElement(tagName);
                elem.className = className;
                return elem;
            };

            const scrollersFrom = (elements, numColumns = 2) => {
                const fragment = new DocumentFragment();
                elements.forEach((element, i) => {
                    const column = i % numColumns;
                    const children = fragment.children;
                    if (!children[column]) {
                        fragment.appendChild(createElement('ul', styles.tagList)); // Use styles.tagList for class name
                    }
                    children[column].appendChild(element);
                });
                return fragment;
            };

            const addScrolling = () => {
                tagScroller.classList.add(styles.scrolling); // Use styles.scrolling for class name
                document.querySelectorAll(`.${styles.tagList}`).forEach(tagList => {
                    const scrollContent = Array.from(tagList.children);
                    scrollContent.forEach(listItem => {
                        const clonedItem = listItem.cloneNode(true);
                        clonedItem.setAttribute('aria-hidden', true);
                        tagList.appendChild(clonedItem);
                    });
                    tagList.style.setProperty('--duration', tagList.clientWidth / 100 + 's');
                });
            };

            const scrollers = scrollersFrom(allTags, 2);
            tagScroller.innerHTML = '';
            tagScroller.appendChild(scrollers);
            addScrolling();
        }
    }, []); // Empty dependency array ensures useEffect runs once after initial render

    return (
        <div>
            <div className={styles.tagScrollers} id='tagScrollers'>
                <div className={styles.tagScroller} id='tagScroller'>
                    <ul className={styles.tagList} id='tagList'>
					<li>SEO / SEM</li>
			<li>Accessibility</li>
			<li>Consumer Insights</li>
			<li>Back-end</li>
			<li>UI</li>
			<li>CMS</li>
			<li>UX</li>
			<li>Market Research</li>
			<li>Measurement Strategy</li>
			<li>Data Architecture</li>
			<li>Online / Digital</li>
			<li>Web Analytics</li>
			<li>Display</li>
			<li>Brand Identity</li>
			<li>Front-end</li>
			<li>Product Design</li>
			<li>Omnichannel Strategy</li>
			<li>Offline / Print</li>
			<li>Audio</li>
			<li>Media Strategy</li>
			<li>POS</li>
			<li>SoMe</li>
			<li>CRM</li>
			<li>Motion Graphics</li>
			<li>OOH / DOOH</li>
			<li>Film Production</li>
			<li>Campaign Development</li>
			<li>Brand Strategy</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListScroll;
