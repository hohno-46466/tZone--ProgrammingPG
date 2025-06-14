from solid import *
from solid.utils import *

c = cube([100, 50, 20], center=True)
print(scad_render(c))
# scad_render_to_file(c, "sample.scad")
