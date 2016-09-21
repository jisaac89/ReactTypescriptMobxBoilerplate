import * as React from 'react';
import {observer} from 'mobx-react';
import {appState} from '../../state/_Store';
import {Align, Button, Toolbar, Table, Checkbox, Layer, Dropdown, Input, Wizard, Modal, Open, Emerge, SlideIn, Transform, Toggle, Shrink} from '../../../recoil/src/index';

interface P {
    children: React.ReactChild
}

interface S {}

@observer
export default class Dashboard extends React.Component<P,S>{
    toggleNightMode() {
        appState.toggleNightMode();
    }
    render() {
        const self = this;
        return (
            <Toolbar block flush textCenter>
                <Button onClick={this.toggleNightMode.bind(this)} icon="moon-o">Night mode</Button>
                <Button icon="github" href={'https://www.github.com/jisaac89/Recoil'} theme="primary">View Github</Button>
            </Toolbar>
        )
    }
}