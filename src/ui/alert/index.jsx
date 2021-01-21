import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import makeClientPromise from "../../client";
import {from_raw_to_nano} from "../../nano";

function Alert() {
  const { wallet } = useParams();
  if(!wallet) {
    return (
      <h1>Error: Wallet addr needed!</h1>
    );
  }

  const [tipAmount, setTipAmount] = useState("0");

  const [tipAddr, setTipAddr] = useState(wallet);
  const tipImage = "/image.gif"; 
  const tipText = `Thank you for the ${tipAmount} Nano tip!`;
  const tipTime = 6000;
  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const Client = makeClientPromise(tipAddr);

    Client.then((data) => {
      console.log(data);
      const tipAmountNano = from_raw_to_nano(data.amount);
      setTipAmount(tipAmountNano);
    }).catch((error) => {
      console.error(error);
    });
  }, [tipAddr]);

  useEffect(() => { // I need fix it
    setIsVisible(true);   // Bug/ Feature
    setTimeout(() => {
      setIsVisible(false);
    }, tipTime);
  }, [tipAmount]);

  return(
    <>
      <div style={css.container}>
        <div>
          <Tip isVisible={isVisible}>
            <header style={css.tipHeader}>
              <img style={css.tipImage} src={tipImage} alt={tipText} />
            </header>
              <p style={css.tipText}>{tipText}</p>
          </Tip>
        </div>
      </div>
    </>
  );
}

const css = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  tip: {
    width: "100%",
    height: "100%",
  },
  tipHeader: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },
  tipImage: {
    width: "65vw"
  },
  tipText: {
    fontFamily: "Montserrat",
    fontSize: "3em",
    color: "#fff",
    textAlign: "center",
  },
}

const Tip = styled.div`
  opacity: ${props => props.isVisible ? '1' : '0'};
  width: 100%;
  height: 100%;
`;

export default Alert;