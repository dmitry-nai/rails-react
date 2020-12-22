import React from "react";
import {Link} from "react-router-dom";
import axios from "axios";

class Pets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: []
    };
    this.onLoadMore = this.onLoadMore.bind(this);
  }

  componentDidMount() {
    axios.get('/api/pets/index')
      .then(res => {
        const pets = res.data.entries;
        this.setState({pets});
      })
      .catch(() => this.props.history.push("/"));
  }

  onLoadMore() {
    axios.get('/api/pets/index')
      .then(res => {
        this.setState({
          pets: this.state.pets.concat(res.data.entries)
        })
      })
      .catch((e) => console.log(e));
  }

  render() {
    const {pets} = this.state;
    const allPets = pets.map((pet, index) => (
      <div key={index} className="col-md-6 col-lg-4">
        <div className="card mb-4">
          <img
            src={pet.image_url}
            className="card-img-top"
            alt={`${pet.full_name} image`}
          />
          <div className="card-body">
            <h5 className="card-title">{pet.full_name}</h5>
            <Link to={`/pets/${pet.id}`} className="btn btn-primary">
              View Pet
            </Link>
          </div>
        </div>
      </div>
    ));
    const noPets = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No Pets yet.
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Pet vote main page</h1>
            <p className="lead text-muted">
              You can explore pets here. (Rails 6.1.0, React 17.0.1)
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="row">
              {pets.length > 0 ? allPets : noPets}
            </div>
            <button className="btn btn-success d-block mx-auto"
                    onClick={this.onLoadMore}>
              Load More
            </button>
          </main>
        </div>
      </>
    );
  }
}

export default Pets;