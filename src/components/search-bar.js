import React, {Component} from 'react'

class SearchBar extends Component {
 constructor(props){
     super(props);
     this.state = {
        searchText:"",
        placeholder:"Tapez votre film..",
        intervalBeforeRequest:1000,
        lockRequest: false
    }
 }
  render() {
    return ( 
        <div className="row">
            <div className="col-lg-8 input-group">
                <input onKeyUp={this.handleChange.bind(this)} type="text" className="form-control input-lg" placeholder={this.state.placeholder} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" onClick={this.handleOnClick.bind(this)}>Go</button>
                </span>
            </div>
        </div>
    )
}
    handleChange(event){
        this.setState({searchText:event.target.value});
        if(!this.state.lockRequest){
            this.setState({lockRequest: true})
            setTimeout(function(){this.search()}.bind(this), this.state.intervalBeforeRequest)
        }
    }

    handleOnClick(event){
        this.search()
    }

    search(){
        this.props.callback(this.state.searchText)
        this.setState({lockRequest:false})
    }

}
export default SearchBar;