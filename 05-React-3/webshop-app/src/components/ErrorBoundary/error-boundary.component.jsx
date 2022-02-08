import React from "react";

export class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
    }

    render() {
        return this.state.hasError
            ? <h1>Something went wrong.</h1>
            : this.props.children;
    }
}
