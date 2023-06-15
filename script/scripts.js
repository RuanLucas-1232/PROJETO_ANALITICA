function adicionar() {
    const tabela = document.querySelector("table.tab")

    tabela.insertAdjacentHTML("beforeend",
        "<tr>"
        + "<td><input type=\"text\" placeholder=\"insira\" class=\"data-Parametros\"></td>"
        + "<td><input type=\"text\" placeholder=\"insira\" class=\"data-Unidade\"></td>"
        + "<td><input type=\"text\" placeholder=\"insira\" class=\"data-Resultado\"></td>"
        + "<td><input type=\"text\" placeholder=\"insira\" class=\"data-CV\"></td>"
        + "<td><input type=\"text\" placeholder=\"insira\" class=\"data-Referencia\"></td>"
        + "</tr>")
    }
    
    
    //Laudo.pdf
    const amostra = document.getElementById('Iamostra').value
    const recepcao = document.getElementById('Irecepcao').value
    const laudo = document.getElementById('Ilaudo').value
    const lote = document.getElementById('Ilote').value
    const fabricacao = document.getElementById('Ifabricacao').value
    const validade = document.getElementById('Ivalidade').value
    const coleta = document.getElementById('Icoleta').value
    const embalagem = document.getElementById('Iembalagem').value
    const finalidade = document.getElementById('Ifinalidade').value
    const interessado = document.getElementById('Iinteressado').value
    const responsavel = document.getElementById('Iresponsavel').value
    const endereco = document.getElementById('Iendereco').value
    
    var tabela = document.getElementById('tab')
    
    tabela.insertAdjacentHTML('beforebegin', `
    <table id="tab1">
    <tr>
    <th style="text-align: justify;">Amostra:</th>
    <td style="text-align: justify;" colspan="4">${amostra}</td>
    </tr>
    <tr>
    <td colspan="2" class="row2">Laudo N°: ${laudo}</td>
    <td class="row2">Data da Recepção: ${recepcao}</td>
<td colspan="2" class="row2">N° Lote: ${lote}</td>
</tr>
<tr>
<td colspan="2" class="row3">Data de Fabricação: ${fabricacao}</td>
<td class="row3">Validade: ${validade}</td>
<td colspan="2" class="row3">Forma de Coleta: ${coleta}</td>
</tr>
<tr>
<td colspan="2" class="row4">Embalagem: ${embalagem}</td>
<td colspan="3" class="row4">Finalidade: ${finalidade}</td>
</tr>
<tr>
<td colspan="2" class="row5">Interessado(a): ${interessado}</td>
<td colspan="3" class="row5">Responsável: ${responsavel}</td>
</tr>
<tr>
<td colspan="5" class="row6">Endereço: ${endereco}</td>
</tr>
<colgroup>
<col style="border:1px solid;" id="Parâmetros">
<col style="border:1px solid;" id="Unidade">
<col style="border:1px solid;" id="Resultado">
<col style="border:1px solid;" id="CV">
<col style="border:1px solid;" id="Referência">
</colgroup>
<tr class="resultados">
<th>Parâmetros</th>
<th>Unidade Medida</th>
<th>Valor Obtido</th>
<th>CV(%)</th>
<th>Valor de Referência</th>
</tr>
</table>
`)

function gerarDocumento() {
    
    const win = window.open('../laudo/Laudo.html')
}