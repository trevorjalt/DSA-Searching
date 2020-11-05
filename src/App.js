import React, { Component } from 'react'
import Data from './Data'
import './App.css'

class App extends Component {
    state = {
        search: null,
        found: false,
        count: 0,
        linearSearch: false,
        binarySearch: false,
        notFound: false
    }

    linearSearch(data, searchValue) {
        let count = 0

        for (let i = 0; i < data.length; i++) {
            count += 1
            if (data[i] === searchValue) {
                return {
                  search: data[i],
                  found: true,
                  count: count,
                  notFound: false,
                }
            }
        }

        if (!data.includes(searchValue)) {
          this.setState({
            found: false,
            notFound: true
          })
        }
    }

    binarySearch(data, searchValue, start, end, count = 0) {

      count = count === undefined ? 0 : count;
      start = start === undefined ? 0 : start;
      end = end === undefined ? data.length : end;
  
      if (start > end) {
          return -1
      }
  
      const index = Math.floor((start + end) / 2);
      const item = data[index];
  
      if (item === searchValue) {
          count++
          return {
              search: searchValue,
              found: true,
              count: count,
              notFound: false,
          }
      }
      else if (item < searchValue) {
          count++
          return this.binarySearch(data, searchValue, index + 1, end, count);
      }
      else if (item > searchValue) {
          count++
          return this.binarySearch(data, searchValue, start, index - 1, count);
      } else {
          return {
              found: false,
              notFound: true
          }
      }
  }



    handleSearch = e => {
      e.preventDefault()

      if (this.state.linearSearch) {
          this.setState(this.linearSearch(Data, this.state.search))
      }

      if (this.state.binarySearch) {
          let sortedData = Data.sort((a, b) => a - b)
          this.setState(this.binarySearch(sortedData, this.state.search))
      }
    }

    onClickBinary = e => {
        this.setState({ 
            binarySearch: true,
            linearSearch: false
        })
    }

    onClickLinear = e => {
        this.setState({ 
            linearSearch: true,
            binarySearch: false
        
        })
    }

    onNumberInput = e => {
        this.setState({ search: Number(e.target.value) })
    }

    render() {
        return (
          <div className="App">
              <h1>DSA Searching</h1>

              <div>
                  <label htmlFor='number'>Choose a number between 1-100</label>
                  <input 
                      type='number' 
                      id='number' 
                      onInput={this.onNumberInput.bind(this)}
                      required />

                  <h2>Select Search Type:</h2>
                  <label htmlFor="Linear">Linear Search</label>
                  <input 
                      type="radio" 
                      name="searchType" 
                      id="Linear" 
                      value="Linear"
                      required 
                      onClick={this.onClickLinear} />
                  <br/>
                  <label htmlFor="binary">Binary Search</label>
                  <input 
                      type="radio" 
                      name="searchType" 
                      id="Binary" 
                      value="Binary" 
                      onClick={this.onClickBinary} />
                  <div>
                    <button 
                        type='click' 
                        onClick={this.handleSearch}
                    >
                        Search
                    </button>
                  </div>
              </div>
              <h3>{this.state.found ? `Number found in ${this.state.count} tries`: ''}</h3>
              <h3>{this.state.count === 0 && !this.state.linearSearch && !this.state.binarySearch 
                      ? 'Can we find your number?'
                      : ''}
              </h3>
              <h3>{this.state.notFound ? 'Your number could not be found! Try again.' : ''}</h3>
          </div>
        );
    }
}

export default App;
