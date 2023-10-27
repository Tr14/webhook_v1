/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import styled from 'styled-components';

export default function HomePage() {

  const Container = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: 20vw;
    margin: 0 auto;
    min-height: 100vh;
  `
  const Btn = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
    flex: 1 1 auto;
    margin: 10px;
    padding: 30px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 10px;
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%);

    :hover {
      background-position: right center;
    }

    & + & {
      background-image: linear-gradient(to right, #84fab0 0%, #8fd3f4 51%, #84fab0 100%); //button kế button đầu tiên
    }

    &.btn3 {
      background-image: linear-gradient(to right, #a1c4fd 0%, #c2e9fb 51%, #a1c4fd 100%); //button có className
    }
  `

  function openAuthoriztion() {
    window.open('https://www.facebook.com/v8.0/dialog/oauth?client_id=843916146887327&redirect_uri=http://localhost:1337/api/facebook/homepage', 'authoriztion', 'width=600,height=600,scrollbars=yes');
  }

  return (
    <Container>
      <Btn className="btn1" onClick={openAuthoriztion}>Facebook Authorization</Btn>
      <Btn className="btn2">Zalo Authorization</Btn>
      <Btn className="btn3">Webhook API</Btn>
    </Container>
  );
};
