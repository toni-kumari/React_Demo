import { useState } from 'react';
import { EXAMPLES } from "../data";
import TabBUtton from "./TabButton";
import Section from './Section';
import Tabs from './Tabs.jsx';

export default function Examples()
{
    const [selectedTopic, setselectedTopic] =useState();
      function handleSelect(selectedButton){
        setselectedTopic(selectedButton);
        console.log(selectedTopic);
      }
    
      let tabContent= <p>Please select a topic</p>;
    
      if(selectedTopic)
      {
        tabContent = (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
        );
      }

    return(
        <Section title ="Examples" id='examples'>
          <Tabs 
            buttons={<><TabBUtton isSelected={selectedTopic === 'components'} onClick={ () =>handleSelect('components')}>Components</TabBUtton>
              <TabBUtton isSelected={selectedTopic === 'jsx'} onClick={ () =>handleSelect('jsx')}>JSX</TabBUtton>
              <TabBUtton isSelected={selectedTopic === 'props'} onClick={ () =>handleSelect('props')}>Props</TabBUtton>
              <TabBUtton isSelected={selectedTopic === 'state'} onClick={ () =>handleSelect('state')}>State</TabBUtton>
              </>}
            >
              {tabContent}
          </Tabs>
           
        </Section>
    );
}