import React, { Component } from 'react';
import { greekToBetaCode, betaCodeToGreek } from 'beta-code-js';

import styles from './Converter.module.css';

class Converter extends Component {
  constructor(props) {
    super(props);

    this.handleBetaChange = this.handleBetaChange.bind(this);
    this.handleUnicodeChange = this.handleUnicodeChange.bind(this);
    this.unicodeText = this.unicodeText.bind(this);
    this.betaCodeText = this.betaCodeText.bind(this);
  }

  handleBetaChange(event) {
    const { value } = event.target;
    const { history } = this.props;

    history.push(`/b/${encodeURIComponent(value)}`);
  }

  handleUnicodeChange(event) {
    const { value } = event.target;
    const { history } = this.props;

    history.push(`/u/${encodeURIComponent(value)}`);
  }

  unicodeText() {
    const { match } = this.props;

    if (match && match.params && ('beta' in match.params)) {
      return betaCodeToGreek(decodeURIComponent(match.params.beta || ''));
    }

    return decodeURIComponent(match.params.unicode || '');
  }

  betaCodeText() {
    const { match } = this.props;

    if (match && match.params && ('unicode' in match.params)) {
      return greekToBetaCode(decodeURIComponent(match.params.unicode || ''));
    }

    return decodeURIComponent(match.params.beta || '');
  }

  render() {
    return (
      <React.Fragment>
        <div className="row pt-4 mb-3">
          <div className="col-12 text-center">
            <h1 className="h3 font-weight-normal">
              English-Greek Dictionary
            </h1>
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          <div className="col-6">
            <h4>Greek Unicode</h4>
            <textarea
              className={`${styles.textarea} form-control input-lg`}
              type="text"
              placeholder="μῆνιν ἄειδε θεὰ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleUnicodeChange}
              value={this.unicodeText()}
            />
          </div>

          <div className="col-6">
            <h4>Beta Code</h4>
            <textarea
              className={`${styles.textarea} form-control input-lg`}
              type="text"
              placeholder="mh=nin a)/eide qea\ ..."
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleBetaChange}
              value={this.betaCodeText()}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default Converter;
