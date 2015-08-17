//var tproteins = ["first", "second", "third"];
var tproteins = ['MGluR5', 'GABA-B-R1', 'Alpha-7 nicotinic receptor', 'A1 adenosine receptor', 'MMP-13', 'MGluR2', 'NS5B', 'D-fructose-1,6-bisphosphate 1-phosphohydrolase 1', 'Muscarinic acetylcholine receptor M1', 'Hexokinase-4'];
var tproteinsblue = ['Androgen Receptor', 'Estrogen receptor beta', 'Dopamine D4 receptor', 'Thrombin', 'Angiotensin II type 2 (AT-2) receptor', 'Dopamine D2 receptor', 'Progesterone receptor', 'Estrogen receptor alpha', 'Galectin-3', 'Renin']

var targetprotein = function(group, title){
  // header
  var header = ['idx', title]

  // create table
  var table = d3.select('.stat').append('div')
    .classed("target", true)
    .selectAll('table')
    .data([group])
  .enter()
    .append('table'),
      thead = table.append("thead"),
      tbody = table.append("tbody");

  // append header
  thead.append("tr")
     .selectAll("th")
     .data(header)
     .enter()
     .append("th")
       .text(function(column) { return column; });

  var tr = tbody.selectAll('tr')
    .data(function(d) { return d; })
  .enter()
    .append('tr')
    .classed('selected', function(d) { return d._selected; })

  tr.append('td').text(function(d, i) { return i + 1; });
  tr.append('td').text(function(d) { return d; });


  // color mixing for properties
 // function multiply(rgb1, rgb2) {
 //   var result = [],
 //   i = 0;
 //   for( ; i < rgb1.length; i++ ) {
 //     result.push(Math.floor(rgb1[i] * rgb2[i] / 255));
 //   }
 //   return result;
 // }

  // Update color
  var colortrans = d3.scale.ordinal().domain(group)
      .range(colorbrewer.Spectral[group.length]);

  function updatecolor(selected){
      node.classed("selectedtarget", function(d){
        if (!d.nominal) return false;
        if ( d.nominal.target && selected.indexOf(d.nominal.target) != -1) {
          return true;
        }
      })
  };

  // JQuery
  $(function() {
    $( ".stat tbody" ).selectable({
      filter:'tr',
      stop: function() {
        var result = [];
        $( ".ui-selected", this ).each(function() {
          selected_name = this.getElementsByTagName("td")[1].innerHTML;
          result.push( selected_name );
        });
        updatecolor(result);
      }
    });
  });
}

targetprotein(tproteins, "All protein targets")