import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../state/_Store';
import * as classNames from 'classnames';
import {Align, Button, Toolbar, Checkbox, Table, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../recoil/src/index';

interface P {
    children: any;
    location: any;
}

interface S {}

@observer
export default class Entry extends React.Component<P,S>{
    componentDidMount() {
        appState.initializeApp();
    }
    render() {        
        const self = this;
        let {children, location} = self.props;
        let content = React.cloneElement(this.props.children || <div />, { key: location });

        let appClass = classNames(
            'r-App',
            {'e-NightMode' : (appState.nightmode)}
        )

        return (
            <Layer fill scrollY className={appClass}>
                <h1 className="super mtb30 text-center"><strong>React</strong> Recoil</h1>
                <div className="w400px center-width mtb30 text-center">
                    <h3>
                        A boiler plate containing, React, Recoil, Typescript, MobX and React Router.
                    </h3>
                </div>
                <div>
                    {content}
                </div>
            </Layer>
        );
    }
}
