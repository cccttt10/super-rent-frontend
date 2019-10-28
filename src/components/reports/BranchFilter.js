import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import uuid from 'uuid/v4';

class BranchFilter extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.selectedBranch = { city: '', branch: '' };
    }

    handleChange(e) {
        e.preventDefault();
        if (e.target.value === 'All') {
            this.selectedBranch = { city: '', branch: '' };
            return this.props.setBranchFilter(null);
        }
        const selectedBranch = {
            city: e.target.value.split('-')[0],
            location: e.target.value.split('-')[1]
        };
        this.selectedBranch = selectedBranch;
        this.props.setBranchFilter(selectedBranch);
    }

    render() {
        const { branches } = this.props;
        return (
            <FormControl>
                <InputLabel>Branch</InputLabel>
                <Select
                    value={
                        this.selectedBranch.city === ''
                            ? 'All'
                            : `${this.selectedBranch.city}-${this.selectedBranch.location}`
                    }
                    onChange={this.handleChange}
                >
                    <MenuItem value="All">All</MenuItem>
                    {branches.map(branch => (
                        <MenuItem
                            key={uuid()}
                            value={`${branch.city}-${branch.location}`}
                        >{`${branch.city} - ${branch.location}`}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        );
    }
}

export default BranchFilter;
