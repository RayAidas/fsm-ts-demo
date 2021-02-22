import { FsmSystem } from "./fsmSystem";
import { State } from "./state";

export default class FsmControl extends FsmSystem {

  public onIdleEnter() {
    this.changeState(State.Mining);
  }

  public onIdleExit(cur:string,pre:string){
    console.log(cur,pre)
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
    if(this.duration>5) this.changeState(State.Build)
  }

  public onCarryExit(){
    console.log('exit carry');
  }
  
  public onBuildEnter(){
    console.log('start build');
  }
  
  public onBuildUpdate(){
    console.log('build');
    if(this.duration>5) this.changeState(State.Upgrade)
  }

  public onBuildExit(){
    console.log('exit build');
  }

  public onUpgradeEnter(){
    console.log('enter upgrade');
  }

  public onUpgradeUpdate(){
    console.log('upgrade');
    if(this.duration>5) this.changeState(State.Repair)
  }

  public onUpgradeExit(){
    console.log('exit upgrade');
  }

  public onRepairEnter(){
    console.log('enter repair');
  }

  public onRepairUpdate(){
    console.log('repair');
    if(this.duration>5) this.changeState(State.Charge)
  }

  public onRepairExit(){
    console.log('exit repair');
  }

  public onChargeEnter(){
    console.log('enter charge');
  }

  public onChargeUpdate(){
    console.log('charge');
    if(this.duration>5) this.changeState(State.Attack)
  }

  public onChargeExit(){
    console.log('exit charge');
  }

  public onAttackEnter(){
    console.log('enter attack');
  }

  public onAttackUpdate(){
    console.log('attack');
    if(this.duration>5) this.changeState(State.Heal)
  }

  public onAttackExit(){
    console.log('exit attack');
  }

  public onHealEnter(){
    console.log('enter heal');
  }

  public onHealUpdate(){
    console.log('heal');
    if(this.duration>5) this.changeState(State.Pause)
  }

  public onHealExit(){
    console.log('exit heal');
  }


  /**
   * ......
   */



  public start() {
    this.addStates(State);
    this.changeState(State.Idle);
  }

  public update() {
    if(this._currentState == State.Pause) return;
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