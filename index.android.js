/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Alert,
  View,TouchableOpacity
} from 'react-native';

export default class hello extends Component {
 constructor(props) {
        super(props);
        this.state = {
          timer:null,
          text:'按钮',
          show:false,
            // passwordBorderColor: '#ececec',
        };
    } 
  componentDidMount() {
    // this.timer = setTimeout(
    //   () => { console.warn('把一个定时器的引用挂在this上'); },
    //   3000
    // );
  }
  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.setState({
        show:false,
    })
  }
  click(){
    if(this.state.show==false){
      this.setState({
            show:true,
            text:'出现',            
        }); 
      setTimeout(
        () => {
          this.setState({
            show:false,
            text:'',            
        });  
          // console.warn('清除view');
        },
        1500
      );


        // this.timer && clearTimeout(this.timer2);
        
    /*}else{   
      this.setState({
            show:true,
            text:'出现',            
        }); 
      // console.warn('渲染view');
      setTimeout(
        () => {
          this.setState({
            show:false,
            text:'',            
        }); 
          // console.warn('出现'); 
        },
        1500
      );*/
    }
   
  }
  render() {
    return (      
        
          <TouchableOpacity onPress={() => {this.click()}}>
            <View>
            <Text style={this.state.show==true?styles.welcome:styles.hello}>
              {this.state.text}
            </Text>
            <Text style={{textAlign: 'center',height:40,
    width:150,backgroundColor:'green',}}>可以切换的按钮</Text>
          
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  contar2:{
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#ededed'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent:'center',
    margin: 10,
    height:40,
    width:150,
    backgroundColor:'red',
  },
  hello: {
    height:0,
    width:0,
    // flex:0,
    backgroundColor:'blue'
  },
});

AppRegistry.registerComponent('hello', () => hello);
