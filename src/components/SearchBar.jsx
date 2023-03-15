import React, { Component } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Search } from '@mui/icons-material';
class SearchBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            input: 'Hi!',
        };
        this.api = process.env.REACT_APP_API_KEY
        this.appid = process.env.REACT_APP_API_ID
    }
    passSearchTerm = () => {
        const client = axios.create({
            baseURL: "https://trackapi.nutritionix.com/v2/"
        });
        client.get('search/instant',{
            params: {
                query :this.state.input,
                branded : 'false'
            },
            headers: {
                'x-app-id': this.appid,
                'x-app-key': this.api,
                'x-remote-user-id': '0',
            }})
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <form>
                    <h5>Search for Nutrition Info</h5>
                    <p>Not sure how many calories are in that bagel? Search here to find out.</p>

                    <div>
                        <div>
                            <input onChange={event => this.setState({ input: event.target.value })}
                                type='text' id='search' name='search' placeholder='Enter food to find nutrition information'/>
                        </div>
                        <div>
                            <Button variant = 'outlined' onClick={(event) => {
                                event.preventDefault();
                                this.passSearchTerm();
                                }}
                                endIcon={<Search/>}
                                > Search
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;