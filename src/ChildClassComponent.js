import React from 'react';

class ChildClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showName: false,
            city: 'GGN',
        }
    }

    showFn = () => {
        this.setState(
            {
                showName: !this.state.showName
            }
        )
    }

    render() {
        const {name, age, city} = this.props
        return (
            <>
                <h1>Child Component - Props Data</h1>
                <h2>{name}</h2>
                <h2>{age}</h2>
                <h2>{city}</h2>
                <button onClick={this.showFn}>Show My Name</button>
                {/* {
                    this.state.showName ? (
                        <>
                            <h2>Deepak Kumar</h2>
                            <h1>{this.state.city}</h1>
                        </>
                    ) : (
                        <>
                            <h2>Deepak Kumar - 2</h2>
                            <h1>{this.state.city}</h1>
                        </>
                    )
                } */}

                {
                    this.state.showName && (
                        <>
                            <h2>Deepak Kumar</h2>
                            <h1>{this.state.city}</h1>
                        </>
                    )
                }
            </ >
        )
    }
}


export default ChildClassComponent;