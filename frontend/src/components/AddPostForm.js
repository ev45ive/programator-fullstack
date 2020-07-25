import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';


export class AddPostFrom extends React.Component {
    state
        = {
            title: 'Please - give me name.',
            image: 'https://i.picsum.photos/id/696/200/300.jpg',
            body: 'Please, write something interesting.'
        }

    handleInput = (event) => {
        const { name, value } = event.target

        switch (name) {
            case 'title': this.setState({ name: value });
                break;
            case 'image': this.setState({ image: value });
                break;
        }
    }
    handleText = (event) => {
        const body = event.target.value
        this.setState({ body })
    }

    addPost = () => {
        const newPost = {
            title: this.state.title,
            image: this.state.image,
            body: this.state.body
        }
        axios.post('http://localhost:8080/api/posts', {
            ...newPost
        })
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col mb-4">
                        <div className="imageIcon text-secondary text-center  fa-10x"><FontAwesomeIcon icon="image" /></div>
                    </div>
                    <div className="col mb-4">
                        <div className="card-body">
                            <p className="card-text">Wypełnij wymagane poniżej dane aby umieścić nowy post</p>
                            <form>
                                <label htmlFor="basic-addon1" className=" font-weight-bold">tytuł</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon1">
                                            <FontAwesomeIcon icon="edit" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon1"
                                        name="title"
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <label htmlFor="basic-addon2" className=" font-weight-bold">Zdjęcie</label>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="basic-addon2">
                                            <FontAwesomeIcon icon="image" />
                                        </span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="" aria-describedby="basic-addon2"
                                        name='image'
                                        onChange={this.handleInput}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="FormControlTextarea1">Treść</label>
                                    <textarea className="form-control" id="FormControlTextarea1"
                                        name="body"
                                        onChange={this.handleText}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary shadow float-right"
                                    onClick={this.addPost}>
                                    <FontAwesomeIcon icon="gavel" />
                                    <span> dodaj</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}