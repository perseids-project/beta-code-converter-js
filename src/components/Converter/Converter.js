import React, { Component } from 'react';
import { shape, string } from 'prop-types';
import { greekToBetaCode, betaCodeToGreek } from 'beta-code-js';
import Clipboard from 'react-clipboard.js';

import I18n from '../I18n';

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
    const { location } = this.props;

    return (
      <>
        <div className="row pt-4 mb-3">
          <div className="col-12 text-center">
            <h1 className="h3 font-weight-normal">
              <I18n t="converter.title" />
            </h1>
          </div>
        </div>

        <div className={`row ${styles.row}`}>
          <div className="col-6">
            <div className="d-block d-sm-none">
              <h2 className="text-center h4">
                <label htmlFor="greek-unicode-input" className="mb-0">
                  <I18n t="converter.smallScreenUnicode" />
                </label>
              </h2>
            </div>
            <div className="d-none d-sm-block">
              <h2 className="text-center h4">
                <label htmlFor="greek-unicode-input" className="mb-0">
                  <I18n t="converter.unicode" />
                </label>
              </h2>
            </div>
            <textarea
              className={`${styles.textarea} form-control input-lg clipboard-target-unicode`}
              id="greek-unicode-input"
              type="text"
              placeholder={I18n.getTranslation(location, 'converter.placeholderUnicode')}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              onChange={this.handleUnicodeChange}
              value={unicode}
            />
          </div>

          <div className="col-6">
            <h2 className="text-center h4">
              <label htmlFor="beta-code-input" className="mb-0">
                <I18n t="converter.betacode" />
              </label>
            </h2>
            <textarea
              className={`${styles.textarea} form-control input-lg clipboard-target-betacode`}
              id="beta-code-input"
              type="text"
              placeholder={I18n.getTranslation(location, 'converter.placeholderBetacode')}
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
              <I18n t="converter.copy" />
            </Clipboard>
          </div>
          <div className="col-6">
            <Clipboard
              button-type="button"
              className="btn btn-block btn-success mb-4 mt-2"
              data-clipboard-target=".clipboard-target-betacode"
            >
              <I18n t="converter.copy" />
            </Clipboard>
          </div>
        </div>
      </>
    );
  }
}

Converter.propTypes = {
  location: shape({
    search: string.isRequired,
  }).isRequired,
};

export default Converter;
