import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ProjectsComponentCard from '../ProjectsComponentCard';

export default function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const panelGridClass = 'grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 2xl:grid-cols-3';

  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='my-10 flex justify-center px-4 sm:my-12 sm:px-6 lg:px-8'>

    <Box sx={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        aria-label="project tabs"
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          alignSelf: 'stretch',
          maxWidth: '100%',
          minHeight: { xs: 44, sm: 48 },
          '& .MuiTabs-scroller': {
            overflowX: 'auto',
          },
          '& .MuiTabs-flexContainer': {
            gap: { xs: 0.5, sm: 1 },
          },
          '& .MuiTab-root': {
            color: '#ffffff',
            minHeight: { xs: 44, sm: 48 },
            minWidth: 'fit-content',
            paddingInline: { xs: 1.25, sm: 1.75 },
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
            whiteSpace: 'normal',
            lineHeight: 1.2,
          },
          '& .MuiTab-root.Mui-selected': {
            color: '#d946ef',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#d946ef',
          },
        }}
      >
        <Tab value="one" label="None" />
        <Tab value="two" label=" C" />
        <Tab value="three" label=" C#" />
        <Tab value="four" label="JavaScript" />
        <Tab value="five" label="Python" />
        <Tab value="six" label="TypeScript" />
      </Tabs>

      <Box sx={{ mt: { xs: 2, sm: 3 }, width: '100%' }}> 
        {value === 'one' && (
          <div className='rounded-lg border border-fuchsia-500/30 bg-fuchsia-500/10 p-5 text-center sm:p-8 lg:p-10'>

            <p>
              Select a programming language to view related projects. 
              Each tab contains a curated list of projects that demonstrate my skills 
              and experience in that language. Click on individual projects for more details 
              and insights into the technologies used, challenges faced, and solutions implemented.
            </p>

            </div>
        )}
        {/* Language C++ */}
        {value === 'two' && (
          <div className={panelGridClass}>

            <ProjectsComponentCard
              title="Hello World in C"
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Developed a console application that interacts with the user by accepting input and displaying 
              personalized messages. This project introduced fundamental programming concepts such as variables, data types, 
              user input, and output operations."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title="Mario In C"
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Created a program that generates pyramid patterns using loops 
              and conditional logic. The application dynamically adjusts the pyramid size based 
              on user input while validating constraints."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title="Cash / Credit "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Built a program that calculates the minimum number of coins required to make change for a given amount. 
              The solution applies a greedy algorithm to optimize the result."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title="Credit "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Developed a credit card validation system that determines whether a 
              card number is valid using the Luhn Algorithm and identifies the card provider based 
              on number patterns."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title="Scrabble in C"
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Created a word-scoring application inspired by the Scrabble board game. The program calculates 
              scores for multiple players by assigning point values to individual letters and comparing results."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Readability in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Implemented a text analysis tool that calculates 
              the readability level of a passage using the Coleman-Liau Index. 
              The application processes characters, words, and sentences to estimate reading difficulty."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Caesar Cipher"
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Developed an encryption tool that encodes 
              messages using the Caesar Cipher technique. 
              The program shifts characters by a user-defined key 
              while preserving case sensitivity and non-alphabetic characters."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Substitution Cipher "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Built a substitution-based encryption program 
              that replaces letters according 
              to a custom user-provided key. The project emphasizes 
              secure input validation and string manipulation."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Sort Algorithms in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Example tab content"
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Plurality "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Created a voting system that records votes 
              for multiple candidates and determines the winner based on the highest number of votes received."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Runoff "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Implemented a ranked-choice voting system that eliminates 
              candidates with the fewest votes until a winner is determined. 
              The project simulates real-world election procedures."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Tideman "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Developed an advanced ranked-choice voting application 
              using graph-based algorithms to determine election outcomes while avoiding 
              cycles in candidate rankings."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Volume algorithm in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Created an audio processing application that modifies 
              the volume level of WAV audio files by manipulating binary data directly."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Filter algorithm in C"
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Developed an image processing program capable of applying grayscale, 
              reflection, blur, and edge-detection filters to bitmap images."
              projects={["Project A", "Project B"]}
            />


            <ProjectsComponentCard
              title=" Recovery algorithm in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Built a forensic recovery tool that scans 
              raw memory data to locate and reconstruct deleted JPEG image files."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Inheritance algorithm in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Simulated genetic inheritance patterns through dynamic 
              memory allocation and recursive structures representing family relationships."
              projects={["Project A", "Project B"]}
            />

            <ProjectsComponentCard
              title=" Speller algorithm in C "
              course="CS50 - Harvard's Introduction to Computer Science"
              description="Implemented a spell-checking system using hash tables for efficient dictionary 
              lookups and text validation. The application analyzes large text files and identifies misspelled words."
              projects={["Project A", "Project B"]}
            />


          </div>
        )}
        {/* Language C# */}
        {value === 'three' && (
          <div className={panelGridClass}>

            <ProjectsComponentCard
              title=" Contoso Pizza "
              course="BYU-Idaho - Software Development with C#"
              description="Developed a pizza ordering application with a user-friendly interface, 
              allowing customers to customize their orders and track delivery status."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" Azure_project - Video Game Store"
              course="BYU-Idaho - Software Development with C#"
              description="Created a video game store application that manages inventory, 
              processes sales, and provides analytics on customer preferences and sales trends."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - Arrays"
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the differences between arrays and lists, and 
              implementing various algorithms to manipulate and process array data structures 
              efficiently."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - Stacks and Queues "
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the implementation and usage of stacks and queues, 
              and applying algorithms to solve problems using these data structures."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - Sets and Maps "
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the implementation and usage of sets and maps, 
              and applying algorithms to solve problems using these data structures."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - LinkedList "
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the implementation and usage of linked lists, 
              and applying algorithms to solve problems using these data structures."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - Recursion "
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the implementation and usage of recursion, 
              and applying algorithms to solve problems using these techniques."
              projects={[]}
            />

            <ProjectsComponentCard
              title=" CSE 212 - Data Structures and Algorithms - Binary Trees "
              course="BYU-Idaho - Software Development with C#"
              description="Understanding the implementation and usage of binary trees, 
              and applying algorithms to solve problems using these data structures."
              projects={[]}
            />


            
          </div>
        )}
        {/* Javascript */}
        {value === 'four' && (
          <div className={panelGridClass}>
            <ProjectsComponentCard
              title="HomePage"
              course="CS50 - Harvard's Introduction to Computer Science"
              description=" Developed a responsive multi-page website using HTML, CSS, and JavaScript. 
              The project incorporated interactive user interface elements, dynamic content updates, 
              and event-driven functionality to enhance user experience. "
              projects={["Project A", "Project B"]}
            />
            
          </div>
        )}
        {/* Python  */}
        {value === 'five' && (
          <div className={panelGridClass}>
            <ProjectsComponentCard
              title="Hello World"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="
              Developed a console application that interacts with the user by accepting input and displaying"
              projects={[]}
            />

            <ProjectsComponentCard
              title="Mario"
              course="cs50 - Harvard's Introduction to Computer Science"
              description=" Created a program that generates dynamic pyramid patterns based on user input. 
              The application demonstrates the use of loops, conditionals, and input validation 
              to produce correctly formatted output."
              projects={[]}
            />

            <ProjectsComponentCard
              title="Cash"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Built a program that calculates the minimum number of coins required to 
              make change for a specified amount. The solution applies a greedy algorithm 
              to optimize the result efficiently."
              projects={[]}
            />

            <ProjectsComponentCard
              title="Credit"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Developed a credit card validation system that determines the validity of a card number using the Luhn Algorithm."
              projects={[]}
            />

            <ProjectsComponentCard
              title="Readability"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Developed a program that analyzes the readability of a given text using the Coleman-Liau index."
              projects={[]}
            />

            <ProjectsComponentCard
              title="DNA"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Developed a program that analyzes DNA sequences to identify specific patterns and mutations."
              projects={[]}
            />

            <ProjectsComponentCard
              title="Finance"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Developed a full-stack stock trading simulator that allows users to register accounts, 
              buy and sell stocks, track portfolios, and view transaction histories using real-time market data."
              projects={[]}
            />

            <ProjectsComponentCard
              title="Final Project - Harvard Blog"
              course="cs50 - Harvard's Introduction to Computer Science"
              description="Developed a blog platform as a final project for Harvard's CS50 course, demonstrating full-stack development skills."
              projects={[]}
            />
            
          </div>
        )}
        {/* TypeScript */}
        {value === 'six' && (
          <div className={panelGridClass}>
            <ProjectsComponentCard
              title="Item One"
              course="Projects"
              description="Example tab content"
              projects={["Project A", "Project B"]}
            />
            
          </div>
        )}
      </Box>
    </Box>

    </div>
  );
}
