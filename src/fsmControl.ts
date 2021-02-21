import { FsmSystem } from "./fsmSystem";
import { State } from "./state";

export default class FsmControl extends FsmSystem {

  public onIdleEnter() {
    this.changeState(State.Mining);
  }

  public onIdleExit(){
    console.log('exit idle')
  }

  public onMiningEnter(){
    console.log('start mining')
  }

  public onMiningUpdate(){
    console.log('mining');
    if(this.duration>5) this.changeState(State.Carry)
  }

  public onMiningExit(){
    console.log('exit mining');
  }

  public onCarryEnter(){
    console.log('start carry')
  }

  public onCarryUpdate(){
    console.log('carry');
    if(this.duration>5) this.changeState(State.Idle)
  }

  public onCarryExit(){
    console.log('exit carry');
  }

  /**
   * ......
   */



  public start() {
    this.addStates(State);
    this.changeState(State.Idle);
  }

  public update() {
    // 更新状态机时间
    if (this.paused) return
    if (this._currentState != null) {
      this.duration += 1;
      if (this[`on${this._currentState}Update`]) {
        this[`on${this._currentState}Update`](this._currentState, this._preState);
      }
    }
  }

  /**
   * 
   * @param creep 
   */
  // public updateCreep(creep){
  //   let state = creep.memory['state'];
  //   if(state) this[`on${state}Update`](creep);
  // }
}