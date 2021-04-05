import { style } from 'typestyle';

export const urlApiFuds = "https://superfuds-assets.s3-sa-east-1.amazonaws.com/utils/product.json";



export const Color = {
  white: '#ffffff',
  black: '#000000',
  lightGreen: '#25c16a',
  darkGreen: '#269e7e',
  grey:'#A8A8A8',
  darkGrey: '#4e4e4e'
}

export const container = style({
  width:'100%',
  padding: '0 40px',
  boxSizing:'border-box',
});

export const NavBarStyle = style({
  width:'100%',
  height: '100px',
  backgroundColor: '#25c16a',
  color: '#fffff',
  display: 'flex',
  flexDirection: 'row',
  alignItems:'center',
  padding:'0px 40px',
  boxSizing: 'border-box',
  $nest: {
    '& .logo':{
      width: '10%'
    },
    '& .search':{
      width: '70%',
      display:'flex',
      justifyContent:'center'
    },
    '& .profile':{
      width: '20%',
      display:'flex',
      $nest:{
        '& .cart':{
          color: Color.white,
          width: '30%'
        },
        '& .info':{
          width: '70%',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          $nest:{
            '& .name':{
              color: Color.white
            },
            '& .viewProfile':{
              display:'flex',
              alignItems:'center',
              justifyContent:'flex-end',
              fontSize:'14px',
              color: Color.darkGrey
            }
          }
        }
      }
    }
  }
});