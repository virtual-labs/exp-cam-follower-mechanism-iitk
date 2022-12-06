
var PUMA560 = {
    scene: null,
    camera: null,
    container: null,
    stats: null,
    controls: null,
    renderer: null,
    CONTAINER_WIDTH: null,
    CONTAINER_HEIGHT: null,
    //link2Mesh: null,
    Link3Mesh: null,
    Link4Mesh: null,
    CylinderL2: null,
    CylinderL5: null,
    CylinderL6: null,
    Cylinder4L5: null,
    Cylinder3L5: null,
    BoxL5: null,
    Cylinder2L1: null,
    init: function () {

// create main scene
        this.scene = new THREE.Scene();
        this.container = document.getElementById("canvas3d-view");
        this.scene.position.set(0, -400, 0);
        this.CONTAINER_WIDTH = this.container.offsetWidth;
        this.CONTAINER_HEIGHT = this.container.offsetHeight;

//  renderer
        this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: false});
        this.renderer.setSize(this.CONTAINER_WIDTH, this.CONTAINER_HEIGHT);
        this.renderer.setClearColor(0x000000, 1); // Set the background color of the canvas to black
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapSoft = true;
        this.container.appendChild(this.renderer.domElement);

// camera
        var VIEW_ANGLE = 45, ASPECT = this.CONTAINER_WIDTH / this.CONTAINER_HEIGHT, NEAR = 1, FAR = 10000;
        this.camera = new THREE.PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
        //this.camera.position.z = 500;
        this.camera.position.set(600, 300, 1500);   //
        //this.camera.lookAt(new THREE.Vector3(0, 0, 0));
        this.camera.lookAt(this.scene.position);
//        this.scene.add(this.camera);
//        
        // And some sort of controls to move around
        // We'll use one of THREE's provided control classes for simplicity
        this.controls = new THREE.TrackballControls(this.camera);

        this.controls.rotateSpeed = 1.0;
        this.controls.zoomSpeed = 1.2;
        this.controls.panSpeed = 0.8;

        this.controls.noZoom = false;
        this.controls.noPan = false;

        this.controls.staticMoving = true;
        this.controls.dynamicDampingFactor = 0.3;

        this.controls.keys = [65, 83, 68];
        this.controls.enabled = false;
        // this.controls.addEventListener('change', render);

// Stats preparing
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '60px';
        this.container.appendChild(this.stats.domElement);

// scene

// Add axes, The X axis is red. The Y axis is green. The Z axis is blue.
        axes = buildAxes(200);
        //axes.position = mesh.position;
        this.scene.add(axes);

        gridX = new THREE.GridHelper(600, 10);    //green
        gridX.setColors(new THREE.Color(0x660000), new THREE.Color(0x660000));
        gridX.position.set(0, 0, 0);
        //this.scene.add(gridX);

        gridZ = new THREE.GridHelper(600, 10);
        gridZ.position.set(0, 600, -600);
        gridZ.rotation.x = Math.PI / 2;
        gridZ.setColors(new THREE.Color(0x000066), new THREE.Color(0x000066));
        //this.scene.add(gridZ);

        gridY = new THREE.GridHelper(600, 10);
        gridY.position.set(-600, 600, 0);
        gridY.rotation.z = Math.PI / 2;
        gridY.setColors(new THREE.Color(0x006600), new THREE.Color(0x006600));
        //this.scene.add(gridY);


        this.loader = new THREE.STLLoader();
        this.loader.load('link1.STL', function (geometry) {

            l1material = new THREE.MeshNormalMaterial( );

            l1mesh = new THREE.Mesh(geometry, l1material);
            l1mesh.rotation.x = -Math.PI / 2;
//l1mesh.postition.set(0,0,0);
            PUMA560.scene.add(l1mesh);
            

        });
        this.loader.load('link2.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-74, -59, 0));
            l2material = new THREE.MeshNormalMaterial( );

            link2Mesh = new THREE.Mesh(geometry, l2material);
            l1mesh.rotation.x = -Math.PI / 2;

            l1mesh.add(link2Mesh);
            link2Mesh.position.set(100, 100, 600);
            Cylinder1 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 60, 100), new THREE.MeshNormalMaterial());
            Cylinder1.rotation.z = -Math.PI / 2;
            Cylinder1.position.set(200, 0, 104);
            link2Mesh.add(Cylinder1);
        });

//geometry.applyMatrix(new THREE.Matrix4().makeTranslation(0, 0, 0));
        this.loader.load('link3.STL', function (geometry) {
            // geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-160, -160, -500));
            l3material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link3Mesh = new THREE.Mesh(geometry, l3material);
            link3Mesh.rotation.x = -Math.PI / 2;
            link3Mesh.rotation.z = -Math.PI / 2;
            link3Mesh.rotation.y = -Math.PI;

            Cylinder1.add(link3Mesh);
            link3Mesh.position.set(150, 120, -160);
            Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 60, 100), new THREE.MeshNormalMaterial());
            Cylinder2.rotation.x = -Math.PI / 2;
            Cylinder2.position.set(600, 150, 100);
            link3Mesh.add(Cylinder2);
        });
        this.loader.load('link4.STL', function (geometry) {
            // geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-160, -160, -500));
            l4material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link4Mesh = new THREE.Mesh(geometry, l4material);
            link4Mesh.rotation.x = -Math.PI / 2;
            // link4Mesh.rotation.z= Math.PI ;
            // link4Mesh.rotation.y= Math.PI/2;

            Cylinder2.add(link4Mesh);
            link4Mesh.position.set(-150, -110, 100);
            //Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 60, 100), new THREE.MeshNormalMaterial());
            // link3Mesh.add(Cylinder2);
        });
        this.loader.load('link5.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-55, -55, 0));
            l5material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link5Mesh = new THREE.Mesh(geometry, l5material);
            //link5Mesh.rotation.x = -Math.PI / 2;
            //link5Mesh.rotation.z= Math.PI ;
            link5Mesh.rotation.y = Math.PI / 2;

            link4Mesh.add(link5Mesh);
            link5Mesh.position.set(495, 100, 52);
            //Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 60, 100), new THREE.MeshNormalMaterial());
            // link3Mesh.add(Cylinder2);
        });
         this.loader.load('link6.STL', function (geometry) {
            geometry.applyMatrix(new THREE.Matrix4().makeTranslation(-55, -55, 0));
            l6material = new THREE.MeshNormalMaterial( );
//Mesh.position.y = 10;
            link6Mesh = new THREE.Mesh(geometry, l6material);
            //link5Mesh.rotation.x = -Math.PI / 2;
            //link5Mesh.rotation.z= Math.PI ;
           // link6Mesh.rotation.y = Math.PI / 2;

            link5Mesh.add(link6Mesh);
            link6Mesh.position.set(-20,30, 100);
            //Cylinder2 = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 60, 100), new THREE.MeshNormalMaterial());
            // link3Mesh.add(Cylinder2);
        });


      
        this.container.addEventListener('mouseover', onContainerMouseOver, false);
        this.container.addEventListener('mouseout', onContainerMouseOut, false);

//        document.addEventListener('mousemove', onContainerMouseMove, false);
//        document.addEventListener('mousedown', onContainerMouseDown, false);
//        document.addEventListener('keydown', onContainerKeyDown, false);
//        document.addEventListener('keyup', onContainerKeyUp, false);
//        document.addEventListener('touchstart', onDocumentTouchStart, false);
//        document.addEventListener('touchmove', onDocumentTouchMove, false);
    }
};

function onContainerMouseOver() {
    PUMA560.controls.enabled = true;
}
function onContainerMouseOut() {
    PUMA560.controls.enabled = false;
}
// Animate the scene
function animate() {
    requestAnimationFrame(animate);
    update();
    render();
}

// Update controls and stats
function update() {
//    AXISCubeScene.controls.update(AXISCubeScene.clock.getDelta());
    PUMA560.controls.update();
    PUMA560.stats.update();
}
// Render the scene
function render() {
    if (PUMA560.renderer) {
        PUMA560.renderer.render(PUMA560.scene, PUMA560.camera);
    }
    //PUMA560.CylinderL6.rotation.x -= 0.05;
    //PUMA560.link2Mesh.rotation.y += Math.PI / 180;
    //PUMA560.link2Mesh.rotation.y -=Math.PI / 160;

}
var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(-5, 15, 0),
        new THREE.Vector3(20, 15, 0),
        new THREE.Vector3(10, 0, 0)
        );

var geometry = new THREE.Geometry();
geometry.vertices = curve.getPoints(50);

var material = new THREE.LineBasicMaterial({color: 0xff0000});

// Create the final Object3d to add to the scene
var curveObject = new THREE.Line(geometry, material);