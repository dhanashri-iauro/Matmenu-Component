import { Story, storiesOf, moduleMetadata, Meta } from '@storybook/angular';
import { MatmenuComponent } from './matmenu.component';
import { AppComponent } from 'src/app/app.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'matmenu',
  component: MatmenuComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [MatmenuComponent],
    }),
  ],
} as Meta;

export const actionsData = {
  onMenuClicked: action('onMenuClicked'),
};

const Template: Story<MatmenuComponent> = (args: MatmenuComponent) => ({
  props: {
    ...args,
    onMenuClicked: actionsData.onMenuClicked,
  },
});

export const Default = Template.bind({});
Default.args = {
  menuData: new AppComponent().menuData,
};
