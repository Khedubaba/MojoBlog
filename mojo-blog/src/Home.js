import { useState } from 'react';

const Home = () => {

    // let name = 'luiji';
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(24);

        const handleClick = (e) => {
            setName('luiji');
            setAge(30);
        }

    // const handleClickAgain = (name, e) => {
    //     console.log("hello", name, e.target);
    // }



    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old.</p>
            <button onClick = {handleClick}>Click Me</button>
            {/* <button onClick = {(e) => handleClickAgain('mario', e)}>Click Me Again</button> */}
        </div>
    );
}
 
export default Home;