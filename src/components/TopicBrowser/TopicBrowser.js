import React, { Component } from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObjects from '../Topics/FilterObject';
import Filterstring from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

export default class TopicBrowser extends Component {
    render() {
    return(
    
    <div>
        <p>Hello World</p>
        <EvenAndOdd />
        <FilterObjects />
        <Filterstring />
        <Palindrome />
        <Sum />
    </div>
   
    ) }
}


