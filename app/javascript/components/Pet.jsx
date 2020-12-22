import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Pet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {pet: {}};
  }

  componentDidMount() {
    const {
      match: {
        params: {id}
      }
    } = this.props;

    const url = `/api/pets/show/${id}`;

    axios.get(url)
      .then(res => {
        const pet = res.data.entry;
        this.setState({pet});
      })
      .catch(() => this.props.history.push("/"));
  }

  render() {
    const {pet} = this.state;
    return (
      <div className="">
        <div className="hero position-relative d-flex align-items-center justify-content-center">
          <img
            src={pet.image_url}
            alt={`${pet.full_name} image`}
            className="img-fluid"
          />
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-sm-12 col-lg-12">
              <h4 className="mb-2 text-center">Pet Details</h4>
              <div className="text-center">
                <p>Name: {pet.full_name}</p>
                <p>Rank: {pet.rank}</p>
                <p>Country: {pet.country}</p>
                <p>Gender: {pet.gender}</p>
                <p>Owner: {pet.owner_name}</p>
                <Link to="/" className="btn btn-primary text-center">
                  Back to main
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pet;