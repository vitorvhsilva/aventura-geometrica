AOS.init();

AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


const pi = 3.14

function calcularAreaCir () {
  let raio = document.getElementById("raio_cir")
  let raioValue = raio.value
  let calculo = (raioValue * raioValue) * pi
  let resultado = document.getElementById("resul_cir")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularVolCubo () {
  let compAresta = document.getElementById("vol_cubo")
  let compArestaValue = compAresta.value
  let calculo = (compArestaValue * compArestaValue * compArestaValue)
  let resultado = document.getElementById("resul_cubo")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaRet () {
  let baseRet = document.getElementById("base_ret")
  let baseRetValue = baseRet.value
  let alturaRet = document.getElementById("alt_ret")
  let alturaRetValue = alturaRet.value
  let calculo = (baseRetValue * alturaRetValue)
  let resultado = document.getElementById("resul_ret")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularVolR () {
  let dMaior = document.getElementById("r_maior")
  let dMaiorValue = dMaior.value
  let dMenor = document.getElementById("r_menor")
  let dMenorValue = dMenor.value
  let alturaR = document.getElementById("r_alt")
  let alturaRValue = alturaR.value
  let calculo = ((dMaiorValue * dMenorValue) / 2) * alturaRValue
  let resultado = document.getElementById("resul_r")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaTrapezoide () {
  let bMenor = document.getElementById("b_menor")
  let bMenorValue = parseFloat(bMenor.value)
  let bMaior = document.getElementById("b_maior")
  let bMaiorValue = parseFloat(bMaior.value)
  let alturaT = document.getElementById("t_alt")
  let alturaTValue = parseFloat(alturaT.value)
  let calculo = ((bMaiorValue + bMenorValue) * alturaTValue) / 2
  let resultado = document.getElementById("resul_t")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaPentagono() {
  let pBase = document.getElementById("p_base")
  let pBaseValue = parseFloat(pBase.value)
  let alturaP = document.getElementById("p_alt")
  let alturaPValue = parseFloat(alturaP.value)
  let calculo = ((pBaseValue * alturaPValue) / 2) * 5
  let resultado = document.getElementById("resul_p")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaHexagono() {
  let hBase = document.getElementById("h_base")
  let hBaseValue = parseFloat(hBase.value)
  let alturaH = document.getElementById("h_alt")
  let alturaHValue = parseFloat(alturaH.value)
  let calculo = ((hBaseValue * alturaHValue) / 2) * 6
  let resultado = document.getElementById("resul_h")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaHeptagono() {
  let hBase = document.getElementById("h2_base")
  let hBaseValue = parseFloat(hBase.value)
  let alturaH = document.getElementById("h2_alt")
  let alturaHValue = parseFloat(alturaH.value)
  let calculo = ((hBaseValue * alturaHValue) / 2) * 7
  let resultado = document.getElementById("resul_h2")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaQuadrado () {
  let ladoQua = document.getElementById("area_qua")
  let ladoQuaValue = parseFloat(ladoQua.value)
  let calculo = (ladoQuaValue * ladoQuaValue)
  let resultado = document.getElementById("resul_qua")
  return resultado.textContent = `O resultado é ${calculo} :)`
}

function calcularAreaCuboide () {
  let ladoA = document.getElementById("a_cubo")
  let ladoAValue = parseFloat(ladoA.value)
  let ladoB = document.getElementById("b_cubo")
  let ladoBValue = parseFloat(ladoB.value)
  let ladoC = document.getElementById("c_cubo")
  let ladoCValue = parseFloat(ladoC.value)

  let superficie = (2 * ladoAValue * ladoBValue + 2 * ladoBValue * ladoCValue + 2 * ladoAValue * ladoCValue)
  let volume = (ladoAValue * ladoBValue * ladoCValue)
  let resultado = document.getElementById("resul_cuboide")
  return resultado.textContent = `A superficie é ${superficie}, o volume é ${volume} :)`
}