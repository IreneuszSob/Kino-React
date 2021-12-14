import React, {Component} from "react";
import Pagination from "./common/pagination";

import {paginate} from "../utils/paginate";
import FilmyTable from "./FilmyTable";
import _ from 'lodash';

class Filmy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            pageSize: 4,
            currentPage: 1,
            sortColumn: {path: 'title', order: 'asc'}
        };
    }

    // myInit = {  method: 'GET',
    //             headers: {
    //                 'Content-Type': 'aplication/json'
    //             },
    //             model: 'cors',
    //             cache: 'default' };
    
    // myRequest = new Request("http://localhost:3000/Filmy")


    
    componentDidMount() {
        fetch("http://localhost:3000/Filmy")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    console.log(result)
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    // handleDelete = (post) => {
    //     const Filmy = this.state.items.filter(p => p.id !== post.id);
    //     this.setState({items: Filmy});
    // };

    handlePageChange = (page) => {
        this.setState({currentPage: page});
    };

    handleSort = (path) => {
        const sortColumn = {...this.state.sortColumn};
        if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.setState({sortColumn});
    };

    renderSortIcon = (column) => {
        console.log(this.state.sortColumn.order)
        if (column !== this.state.sortColumn.path) {
            return null;
        }
        if (this.state.sortColumn.order === 'asc') {
            return <i className="fa fa-sort-asc"></i>
        }

        if (this.state.sortColumn.order === 'desc') {
            return <i className="fa fa-sort-desc"></i>
        }
    };

    render() {

        const {items, pageSize, currentPage, sortColumn} = this.state;

        if (!items.length) {
            return <p>Brak wpisów</p>
        }

        const sorted = _.orderBy(items, [sortColumn.path], [sortColumn.order]);

        const Filmy = paginate(sorted, currentPage, pageSize);

        return (
            <React.Fragment>
                <FilmyTable
                    items={Filmy}
                    sortIcon={this.renderSortIcon}
                    onDelete={this.handleDelete}
                    onSort={this.handleSort}/>
                <Pagination
                    itemsCount={items.length}
                    pageSize={this.state.pageSize}
                    currentPage={this.state.currentPage}
                    onPageChange={this.handlePageChange}
                />
            </React.Fragment>)
    }
}

export default Filmy;