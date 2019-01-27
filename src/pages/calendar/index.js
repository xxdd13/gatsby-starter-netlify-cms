import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'
import Selectable from './selectable'
import 'react-big-calendar/lib/less/styles.less';
import './styles.less';
import './prism.less';

import BigCalendar from 'react-big-calendar';

import events from './events';
import moment from 'moment'
const localizer = BigCalendar.momentLocalizer(moment)


function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  render() {

    return (
      <Layout>
        <section className="section">
          <div className='app'>

            <div className='examples'>
              <div className='example'>
                <div className='demo' >
                  <h3 className="callout">
                    Click an event to see more info, or
                    drag the mouse over the calendar to select a date/time range.
                  </h3>
                  <Selectable localizer={localizer} />

                </div>

              </div>
            </div>
          </div>

        </section>
      </Layout>
    );
  }




}
