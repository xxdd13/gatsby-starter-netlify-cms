import React from "react";
import Layout from '../../components/Layout'
import Selectable from './selectable'
import 'react-big-calendar/lib/less/styles.less';
import './styles.less';
import './prism.less';

import BigCalendar from 'react-big-calendar';
import moment from 'moment'
const localizer = BigCalendar.momentLocalizer(moment)


export default class Index extends React.Component {
  constructor(props) {
    super(props);
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
