import React, { Component } from 'react';
import { greekToBetaCode, betaCodeToGreek } from 'beta-code-js';
import Clipboard from 'react-clipboard.js';

import styles from './Converter.module.css';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beta: '',
      unicode: '',
    };

    this.handleBetaChange = this.handleBetaChange.bind(this);
    this.handleUnicodeChange = this.handleUnicodeChange.bind(this);
  }

  handleBetaChange(event) {
    const { value } = event.target;

    this.setState({
      beta: value,
      unicode: betaCodeToGreek(value),
    });
  }

  handleUnicodeChange(event) {
    const { value } = event.target;

    this.setState({
      beta: greekToBetaCode(value),
      unicode: value,
    });
  }

  render() {
    const { beta, unicode } = this.state;

    return (
      <>
        <div className="row pt-4 mb-3">
          <div className="col-12 text-center">
            <h1 className="h3 font-weight-normal">
              Greek Beta Code Converter
            </h1>
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          <div className="col-6">
            <div className="d-block d-sm-none">
              <h4 className="text-center">
                Unicode
              </h4>
            </div>
            <div className="d-none d-sm-block">
              <h4 className="text-center">
                 Greek Unicode
              </h4>
            </div>
            <textarea
              className={`${styles.textarea} form-control input-lg clipboard-target-unicode`}
              type="text"
              placeholder="μῆνιν ἄειδε θεὰ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleUnicodeChange}
              value={unicode}
            />
          </div>

          <div className="col-6">
            <h4 className="text-center">Beta Code</h4>
            <textarea
              className={`${styles.textarea} form-control input-lg clipboard-target-betacode`}
              type="text"
              placeholder="mh=nin a)/eide qea\ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleBetaChange}
              value={beta}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <Clipboard
              button-type="button"
              className="btn btn-block btn-success mb-4 mt-2"
              data-clipboard-target=".clipboard-target-unicode"
            >
              Copy to Clipboard
            </Clipboard>
          </div>
          <div className="col-6">
            <Clipboard
              button-type="button"
              className="btn btn-block btn-success mb-4 mt-2"
              data-clipboard-target=".clipboard-target-betacode"
            >
                Copy to Clipboard
            </Clipboard>
          </div>
        </div>
      </>
    );
  }
}

export default Converter;
