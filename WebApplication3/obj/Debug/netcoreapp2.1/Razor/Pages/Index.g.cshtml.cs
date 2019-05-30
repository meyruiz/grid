#pragma checksum "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\Pages\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "8171fd9ca4ac240347dd23ca41fdbf4aef0e8ed7"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(WebApplication3.Pages.Pages_Index), @"mvc.1.0.razor-page", @"/Pages/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure.RazorPageAttribute(@"/Pages/Index.cshtml", typeof(WebApplication3.Pages.Pages_Index), null)]
namespace WebApplication3.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\Pages\_ViewImports.cshtml"
using WebApplication3;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"8171fd9ca4ac240347dd23ca41fdbf4aef0e8ed7", @"/Pages/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3c0aa44830bef36841a062868044c1fc5e79428b", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "C:\Users\mayra.ruiz\OneDrive - Epicor\Documents\grid\WebApplication3\Pages\Index.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
            BeginContext(71, 2100, true);
            WriteLiteral(@"
    <div id=""dialog"" title=""Cell Settings"">
        <div>
            <label>Size</label>
        </div>
        <div>
            <span style=""right: 0;"">
                Length:
                <input type=""text"" class=""item_lenFT"" style=""width: 35px;""> FT
                <input type=""text"" class=""item_lenIN"" style=""width: 35px;""> IN

                Width: <input type=""text"" class=""item_w"" style=""width: 35px;""> IN
            </span>
        </div>
        <div>
            <button type=""button"" class=""btn add-horizontal-offcut"" href=""#add-horizontal-offcut"" style=""margin-bottom:15px;"">Horizontal Offcut</button>
            <button type=""button"" class=""btn add-vertical-offcut"" href=""#add-vertical-offcut"" style=""margin-bottom:15px;"">Vertical Offcut</button>
        </div>
    </div>

    <!-- Modal -->
    <div class=""modal fade"" id=""exampleModal"" tabindex=""-1"" role=""dialog"" aria-labelledby=""exampleModalLabel"" aria-hidden=""true"">
        <div class=""modal-dialog"" role=""document"">
   ");
            WriteLiteral(@"         <div class=""modal-content"">
                <div class=""modal-header"">
                    <h5 class=""modal-title"" id=""exampleModalLabel"">Enter Cut Size</h5>
                    <button type=""button"" class=""close"" data-dismiss=""modal"" aria-label=""Close"">
                        <span aria-hidden=""true"">&times;</span>
                    </button>
                </div>
                <div class=""modal-body"">
                    <p>Length: <input id=""lengthFT"" type=""text"" name=""lengthFT""> FT <input id=""lengthIN"" type=""text"" name=""lengthIN""> IN </p>
                    <p>Width: <input id=""widthIN"" type=""text"" name=""widthIN""> IN </p>
                </div>
                <div class=""modal-footer"">
                    <button type=""button"" class=""btn btn-secondary"" data-dismiss=""modal"">Close</button>
                    <button type=""button"" class=""btn btn-primary add-cust-cell"" href=""#add-cust-cell"" data-toggle=""modal"" data-target=""#exampleModal"">Create</button>
                </div>
");
            WriteLiteral("            </div>\r\n        </div>\r\n    </div>\r\n    ");
            EndContext();
            BeginContext(2171, 2475, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("body", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "01c8e4652d37494e88baa52454f52de9", async() => {
                BeginContext(2177, 2462, true);
                WriteLiteral(@"
        <div id=""scale"">
            <p>Scale</p>
            <p>2' x 1.00""</p>
            <hr />
            <button type=""button"" class=""btn btn-primary"" data-toggle=""modal"" data-target=""#exampleModal"">Add Cut</button>
            <hr />
            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"" onclick=""changeZoom(1)"">Zoom In</button>
            <button type=""button"" class=""btn"" style=""margin-bottom:15px;"" onclick=""changeZoom(-1)"">Zoom Out</button>
            <button type=""button"" class=""btn print"" href=""#print"" onclick=""PrintElem()"" style=""margin-bottom:15px;"">Print</button>
        </div>
        <div id=""main"" class=""vbox"">
            <div id=""info-general"">
                <p>SIZE: <span id=""gridHeight"">600</span>' X <span id=""gridWidth"">84</span>.0000"" ITEM: FERROFLEX STEEL REINFORCED BELT    LOT: D0118990-B    CUST: ACME MINING OF MINNESOTA, INC</p>
                <p>REQUIRED: 2 CUTS - 80'6.0000"" X 36.0000 ****1 OF 2 ADDED ****</p>
            </div>
            <");
                WriteLiteral(@"div id=""container"" style=""height:637px; overflow: auto;display: flex;"">
                <!--<div class=""col-md-12 border"" style=""height:637px; overflow: scroll;display: flex;flex-wrap: wrap;"">-->
                <div class='ruler-horizontal'>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                </div>
                <div class='ruler-vertical'>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                    <div class='in'></div>
                </div>
                <div id=""grid-container"" class=""grid-container"">
  ");
                WriteLiteral(@"                  <ul id=""grid"" class=""grid"" style=""width: 1681px !important;"">
                        <li class=""position-highlight"">
                            <div class=""inner""></div>
                        </li>
                    </ul>
                </div>
            </div>
            <button type=""button"" class=""btn save"" style=""float:right; width:60px;"">Save</button>
        </div>
    ");
                EndContext();
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.BodyTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_BodyTagHelper);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4646, 2915, true);
            WriteLiteral(@"


<script type=""text/javascript"">
    var zoom = 10;

    $(document).ready(function () {
        $('[data-toggle=""tooltip""]').tooltip();
    });

    function setZoom(zoom, el) {
        transformOrigin = [0, 0];
        el = el || instance.getContainer();
        var p = [""webkit"", ""moz"", ""ms"", ""o""],
            s = ""scale("" + zoom + "")"",
            oString = (transformOrigin[0] * 100) + ""% "" + (transformOrigin[1] * 100) + ""%"";

        for (var i = 0; i < p.length; i++) {
            el.style[p[i] + ""Transform""] = s;
            el.style[p[i] + ""TransformOrigin""] = oString;
        }

        el.style[""transform""] = s;
        el.style[""transformOrigin""] = oString;
    }

    //setZoom(5,document.getElementsByClassName('grid-container')[0]);

    function showVal(a) {
        var zoomScale = Number(a) / 10;
        setZoom(zoomScale, document.getElementsByClassName('grid')[0])
    }

    function changeZoom(a) {
        zoom += a;
        var zoomScale = Number(zoom) / ");
            WriteLiteral(@"10;
        setZoom(zoomScale, document.getElementsByClassName('grid')[0]);


        var width = (1680 * (Number(zoom) / 10));
        var height = (1680 * (Number(zoom) / 10));

        document.getElementById(""grid-container"").style.width = width + ""px"";
        document.getElementById(""grid-container"").style.height = height + ""px"";

        //document.getElementsByClassName(""grid-container"").style.width = (1680 * (Number(zoom) / 10));
        //document.getElementsByClassName(""grid-container"").style.height = (1680 * (Number(zoom) / 10));

    }

    var zoomScale = document.getElementById('grid');
    const element = document.querySelector('.grid');
    const style = getComputedStyle(element);

    // var canvasHeight = $('#canvas').height();
    // var canvasWidth = $('#canvas').width();

    function PrintElem() {
        var mywindow = window.open('', 'PRINT', 'height=400,width=600');

        mywindow.document.write('<base href=""' + location.origin + location.pathname + '"">');");
            WriteLiteral(@"
        mywindow.document.write('<html><head><title>' + document.title + '</title>');
        mywindow.document.write('</head><body >');
        mywindow.document.write('<link rel=""stylesheet"" href=""/lib/bootstrap/dist/css/bootstrap.css"" />');
        mywindow.document.write('<link rel=""stylesheet"" href=""/css/site.css"" type=""text/css"" />');
        mywindow.document.write('<link rel=""stylesheet"" href=""/css/jquery-ui.min.css"" />');
        mywindow.document.write('<h1>' + document.title + '</h1>');
        mywindow.document.write(document.getElementById(""grid-container"").innerHTML);
        mywindow.document.write('</body></html>');

        mywindow.document.close(); // necessary for IE >= 10
        mywindow.focus(); // necessary for IE >= 10*/

        mywindow.print();
        mywindow.close();

        return true;
    }

</script>");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
