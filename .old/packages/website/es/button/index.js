import { createComponent } from 'react-fela';
var Button = createComponent(function () {
  return {
    background: '#FFF',
    paddingX: 20,
    color: '#59636d',
    fontSize: 11,
    lineHeight: '18px',
    fontWeight: 'bold',
    boxShadow: '0 1px 0 #ebebec',
    borderColor: '1px solid #d0d0d0',
    borderRadius: 3
  };
}, 'button', function (p) {
  return Object.keys(p);
});
export default Button;