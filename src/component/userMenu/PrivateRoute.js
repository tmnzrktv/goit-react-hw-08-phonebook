import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';

// Если маршрут приватный и пользователь залогинен - рендер компонента
// Если нет - отправка на Логин

const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    ...routeProps
}) => (
    <Route
        {...routeProps}
        render={props =>
            isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
