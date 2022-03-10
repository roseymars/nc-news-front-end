// import React, {useState} from 'react'
// import TextField from "@mui/material/TextField";

// function List({articles}) {
//     const filter = articles.filter(article => article.title)
//   //create a new array by filtering the original array
//     const filteredData = articles.filter((el) => {
//         //if no input the return the original
//         if (articles.input === '') {
//             return el;
//         }
//         //return the item which contains the user input
//         else {
//             return el.title.toLowerCase().includes(articles.input)
//         }
//     })
//     return (
//         <ul>
//             {filter.map((article) => (
//                 <li key={article.id}>{article.body}</li>
//             ))}
//         </ul>
//     )
// }

// const SearchBar = () => {
//     const [inputText, setInputText] = useState("")
//     const handleInput = (e) => {
//         let lowerCaseInput = e.target.value.toLowerCase()
//         setInputText(lowerCaseInput)
//     }

//     return (
//         <>
//         <div className="search-bar-container">
//             <h3 id="search-bar-header">what do you want to read today? search here...</h3>
//         <TextField id="outlined-basic" variant="outlined" label="Search" variant="outlined" placeholder="search here" onChange={handleInput}/>
//         </div>
//         <List input={inputText} />
//         </>
//     )

// }

// export {SearchBar, List};